/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table('players', (table) => {
    table.integer('rank_ringer').unique();
    table.integer('rank_espn').unique();
    table.integer('rank_si').unique();
    table.integer('rank_fpros').unique();
    table.integer('rank_matthew_berry').unique();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
