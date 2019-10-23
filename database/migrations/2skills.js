exports.up = function(knex, Promise) {
    return knex.schema.createTable('skills', tbl => {
        tbl.increments('id')
        tbl.string('skill', 256)
        tbl.string('skill_subset', 256)
        tbl.string('description', 256)
        tbl.string('years_experience', 128)
        tbl.float('hourly_rate')
        tbl
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .notNullable();
    })
}

exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTableIfExists('skills')
    ])
}