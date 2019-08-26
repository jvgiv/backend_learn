exports.up = function(knex, Promise) {
    return knex.schema.createTable('review', tbl => {
        tbl.increments('id')
        tbl.string('review_skill', 256)
        tbl.string('review_skill_subset', 256)
        tbl.string('review', 256)
        tbl.float('rating')
        tbl.integer('reviewer_user_id')
        tbl.integer('reviewed_user_id') 
        tbl
            .integer('skills_id')
            .unsigned()
            .references('id')
            .inTable('skills')
            .onDelete('CASCADE')
            .notNull();
    })
}

exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTableIfExists('review')
    ])
}