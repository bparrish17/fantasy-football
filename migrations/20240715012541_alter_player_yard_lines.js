exports.up = function(knex) {
  return knex.schema.table('players', (table) => {
    table.float('x_pass_yards', 8, 1).alter();
    table.float('x_rush_yards', 8, 1).alter();
    table.float('x_rec_yards', 8, 1).alter();
  });
};

exports.down = function(knex) {
  return knex.schema.table('players', (table) => {
    table.integer('x_pass_yards').alter();
    table.integer('x_rush_yards').alter();
    table.integer('x_rec_yards').alter()
  });
};
