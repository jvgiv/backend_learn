exports.seed = function(knex) {
    return knex('skills')
      .del()
      .then(function() {
        return knex('skills').insert([
            {
                skill: "Baseball",
                skill_subset: "Pitching",
                description: "I play baseball",
                years_experience: "1.5",
                hourly_rate: 15,
                user_id: 1
            },
            {
                skill: "Basketball",
                skill_subset: "ft",
                description: "I play basketball",
                years_experience: "1.5",
                hourly_rate: 15,
                user_id: 2
            },
            {
                skill: "football",
                skill_subset: "qb",
                description: "I play football",
                years_experience: "1.5",
                hourly_rate: 15,
                user_id: 3
            }
        ])
    })
}