/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  table.integer('rank_ringer').unique();
  table.integer('rank_ringer_ppr').unique();
  table.integer('rank_espn').unique();
  table.integer('rank_si').unique();
  table.integer('rank_si').unique();

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
