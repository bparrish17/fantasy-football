
exports.up = function(knex) {
  return knex.schema.table('players', (table) => {
    table.integer('my_rating', 4);
    table.boolean('drafted').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.table('players', (table) => {
    table.dropColumn('my_rating');
    table.dropColumn('drafted');
  });
};
