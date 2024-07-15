exports.up = function(knex) {
  return knex.schema.createTable('teams', (table) => {
    table.string('id', 3).primary();
    table.string('name').notNullable();
    table.enum('conference', ['AFC', 'NFC'])
    table.enum('division', ['North', 'South', 'East', 'West'])
    table.integer('bye_week')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams');
};