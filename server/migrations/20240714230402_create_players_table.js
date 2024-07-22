

exports.up = function(knex) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.enum('position', ['QB', 'RB', 'WR', 'TE', 'K', 'DST']).notNullable();
    table.string('team_id', 3).unsigned().references('id').inTable('teams');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams');
};