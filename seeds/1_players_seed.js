const csv = require('csvtojson')
const fs = require('fs');
const _ = require('lodash');
const path = require('path');


function getFromCsv(name, properties) {
  return csv()
    .fromFile(path.join(__dirname, `../data/${name}.csv`))
    .then((players) => players.map((player) => _.pick(player, properties)))
}

async function getPositionGroup(position) {
  return getFromCsv(`si_${position}_rankings`, ['Player', 'Team']).then((players) => players.map((plyr) => {
    const [last_name, ...first_name] = plyr.Player.split(' ').reverse();
    return { first_name: `${first_name.reverse().join(' ')}`, last_name, position: position.toUpperCase(), team_id: plyr.Team }
  }))
}

async function getDefenses(knex) {
  const dstTeamsByName = await knex('teams').select('*').then((teams) => _.keyBy(teams, 'name'))
  const dsts = await getPositionGroup('dst').then((defenses) => {
    return defenses.map((def) => {
      const dstTeam = dstTeamsByName[`${def.first_name} ${def.last_name}`]
      if (dstTeam) {
        const team_id = dstTeam.id;
        return { ...def, team_id }
      } else {
        return def;
      }
    })
  })
  return dsts;
}

async function backfillPlayersByPosition(knex) {
  const qbs = await getPositionGroup('qb');
  const rbs = await getPositionGroup('rb');
  const wrs = await getPositionGroup('wr');
  const tes = await getPositionGroup('te');
  const ks = await getPositionGroup('k');
  const dsts = await getDefenses(knex);
  await knex('players').insert([...qbs, ...rbs, ...wrs, ...tes, ...ks, ...dsts]);
}

async function corrections(knex) {
  const correction = async (criteria, newValues) => knex('players').where(criteria).update(newValues)

  await correction({ first_name: 'Brian Robinson' }, { first_name: 'Brian', last_name: 'Robinson Jr.'});
  await correction({ first_name: 'Michael Penix' }, { first_name: 'Michael', last_name: 'Penix Jr.'});
  await correction({ first_name: 'Tyrone Tracy' }, { first_name: 'Tyrone', last_name: 'Tracy Jr.'});
  await correction({ first_name: 'Marvin Harrison' }, { first_name: 'Marvin', last_name: 'Harrison Jr.'});
  await correction({ first_name: 'Michael Pittmann' }, { first_name: 'Michael', last_name: 'Pittmann Jr.'});
  await correction({ first_name: 'Deebo Samuel' }, { first_name: 'Deebo', last_name: 'Samuel'});
  await correction({ first_name: 'Brian Thomas' }, { first_name: 'Brian', last_name: 'Thomas Jr.'});
  await correction({ first_name: 'Odell Beckham' }, { first_name: 'Odell', last_name: 'Beckham Jr.'});
  await correction({ first_name: 'Brian Thomas' }, { first_name: 'Brian', last_name: 'Thomas Jr.'});
  await correction({ first_name: 'Kansas City', last_name: 'Chiefs' }, { team_id: 'KC' });
  await correction({ first_name: 'Jacksonville', last_name: 'Jaguars' }, { team_id: 'JAX' });
  await correction({ first_name: 'Philadelphia', last_name: 'Eagles' }, { team_id: 'PHI' });
  await correction({ first_name: 'Cincinnati', last_name: 'Bengals' }, { team_id: 'CIN' });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('players').del()
  await backfillPlayersByPosition(knex);
  await corrections(knex);
};