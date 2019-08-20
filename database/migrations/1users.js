exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('id');
        tbl.string('email', 256).unique().notNullable()
        tbl.string('bio', 256)
        tbl.string('picture', 256)
        tbl.string('first_name', 256)
        tbl.string('last_name', 256)
        tbl.string('user_type', 256)
        tbl.float('longitude')
        tbl.float('latitude')
        tbl.float('facebook_id')
        tbl.float('google_id')
        tbl.float('earnings')
        tbl.float('rating')
        tbl.integer('number_of_ratings')
    })
}

exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTableIfExists('users')
    ])
}