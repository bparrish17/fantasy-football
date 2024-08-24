const { getFromCsv } = require('../utils/helpers.js')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const update = async (criteria, rank) => {
    await knex('players')
      .where(criteria)
      .update({ x_rec_yards: receivingYards, x_rec_tds: receivingTds  })
  }

  const players = await getFromCsv('espn_full_ppr_rankings.csv');
  for (const player of players) {
    console.log('player', player)
    const [last_name, ...first_name] = player.name.split(' ').reverse();

    await knex('players')
      .where({ first_name: `${first_name.reverse().join(' ')}`, last_name })
      .update({ rank_ringer: player.rank })
  }
};
