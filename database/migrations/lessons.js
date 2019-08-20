exports.up = function(knex, Promise) {
    return knex.schema.createTable('lessons', tbl => {
        tbl.increments('id')
        tbl.string('location', 256)
        tbl.string('date', 256)
        tbl.float('length_hours')
        tbl.float('cost')
        tbl.boolean('approved_by_giver')
        tbl.boolean('completed')
        tbl
            .integer('lesson_giver_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .notNull();
        tbl
            .integer('lesson_taker_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .notNull();
    })
}

exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTableIfExists('lessons')
    ])
}