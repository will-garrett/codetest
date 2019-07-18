
exports.up = function(knex, Promise) {
  return knex.schema.createTable('interests', function(table){
    table.increments().primary();
    table.text('image_loc');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('interests');
};
