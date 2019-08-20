exports.seed = function(knex) {
    return knex('lessons')
      .del()
      .then(function() {
        return knex('lessons').insert([
            {
                location: "City Park",
                date: "12/5/19",
                length_hours: 1.5, 
                cost: 0,
                approved_by_giver: true, 
                completed: false,
                lesson_giver_id: 1,
                lesson_taker_id: 3
            }
        ])
    })
}