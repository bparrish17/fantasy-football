
exports.up = function(knex) {
  return knex.schema.table('players', (table) => {
    table.increment('notes', 1023);
  });
};

exports.down = function(knex) {
  return knex.schema.table('players', (table) => {
    table.dropColumn('notes')
  });
};
