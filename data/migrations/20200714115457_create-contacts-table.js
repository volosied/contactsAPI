
exports.up = function(knex) {
  return knex.schema.createTable('contacts', tbl => {
      tbl.increments();
      tbl.text('name', 128).notNullable();
      tbl.integer('number').unique().notNullable();
      tbl.text('email').unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contacts')
};
