
exports.up = function(knex, Promise) {
  return knex.schema.createTable('factoids', function(table){
    table.increments();
    table.integer('interest_id').unsigned().references('id').inTable('interests');
    table.text('fact');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('factoids');
};
