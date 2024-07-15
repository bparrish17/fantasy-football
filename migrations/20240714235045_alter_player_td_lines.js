
exports.up = function(knex) {
  return knex.schema.table('players', (table) => {
    table.float('x_pass_tds', 3, 1).alter();
    table.float('x_rush_tds', 3, 1).alter();
    table.float('x_rec_tds', 3, 1).alter();
  });
};

exports.down = function(knex) {
  return knex.schema.table('players', (table) => {
    table.dropColumn('x_pass_tds');
    table.dropColumn('x_rush_tds');
    table.dropColumn('x_rec_tds')
  });
};