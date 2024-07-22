const TEAMS = require('../data/teams');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("teams").del();
  await knex("teams").insert(TEAMS);
  await knex('teams').whereIn('id', ['DET', 'LAC', 'PHI', 'TEN']).update({ bye_week: 5 })
  await knex('teams').whereIn('id', ['KC', 'LAR', 'MIA', 'MIN']).update({ bye_week: 6 })
  await knex('teams').whereIn('id', ['CHI', 'DAL']).update({ bye_week: 7 })
  await knex('teams').whereIn('id', ['PIT', 'SF']).update({ bye_week: 9 })
  await knex('teams').whereIn('id', ['CLE', 'GB', 'LV', 'SEA']).update({ bye_week: 10 })
  await knex('teams').whereIn('id', ['ARI', 'CAR', 'NYG', 'TB']).update({ bye_week: 11 })
  await knex('teams').whereIn('id', ['ATL', 'BUF', 'CIN', 'JAX', 'NO', 'NYJ']).update({ bye_week: 12 })
  await knex('teams').whereIn('id', ['BAL', 'DEN', 'HOU', 'IND', 'NE', 'WAS']).update({ bye_week: 14 })
};
