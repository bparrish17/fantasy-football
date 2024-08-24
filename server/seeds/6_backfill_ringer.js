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

  const players = await getFromCsv('ringer_half_ppr_rankings');
  for (const player of players) {
    const [last_name, ...first_name] = player.name.split(' ').reverse();

    await knex('players')
      .where({ first_name: `${first_name.reverse().join(' ')}`, last_name })
      .update({ rank_ringer: player.rank })
  }
};
