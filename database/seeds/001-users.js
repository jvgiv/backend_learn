exports.seed = function(knex) {
    return knex('users')
      .del()
      .then(function() {
        return knex('users').insert([
            {
                email: "test@test.com",
                first_name: "John",
                last_name: "Last",
                user_type: "teacher",
                longitude: 0,
                latitude: 0,
                facebook_id: 0,
                google_id: 0,
                earnings: 0,
                rating: 4.5,
                number_of_ratings: 5
            },
            {
                email: "test2@Text.com",
                first_name: 'ball',
                last_name: "player",
                user_type: "student",
                longitude: 0,
                latitude: 0,
                facebook_id: 0,
                google_id: 0,
                earnings: 0,
                rating: 0,
                number_of_ratings: 5
            },
            {
                email: "test34@test.com",
                first_name: "Joey",
                last_name: "Donuts",
                user_type: "student",
                longitude: 0,
                latitude: 0,
                facebook_id: 0,
                google_id: 0,
                earnings: 0,
                rating: 0,
                number_of_ratings: 5
            },
        ])
    })
}