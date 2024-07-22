
exports.up = function(knex) {
  return knex.schema.table('players', (table) => {
    table.integer('x_pass_yards');
    table.integer('x_pass_tds');

    table.integer('x_rush_yards');
    table.integer('x_rush_tds');

    table.integer('x_rec_yards');
    table.integer('x_rec_tds');
  });
};

exports.down = function(knex) {
  return knex.schema.table('players', (table) => {
    table.dropColumn('x_pass_yards');
    table.dropColumn('x_pass_tds');

    table.dropColumn('x_rush_yards');
    table.dropColumn('x_rush_tds');

    table.dropColumn('x_rec_yards');
    table.dropColumn('x_rec_tds');
  });
};
