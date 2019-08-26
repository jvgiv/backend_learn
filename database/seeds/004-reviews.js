exports.seed = function(knex) {
    return knex('review')
      .del()
      .then(function() {
        return knex('review').insert([
            {
                review_skill: "baseball",
                review_skill_subset: "pitching",
                review: "Good Job",
                rating: "4.75",
                reviewer_user_id: "2",
                reviewed_user_id: "1",
                skills_id: 1
            },
            {
                review_skill: "baseball",
                review_skill_subset: "pitching",
                review: "Good Job",
                rating: "4.75",
                reviewer_user_id: "2",
                reviewed_user_id: "1",
                skills_id: 1
            },
            {
                review_skill: "baseball",
                review_skill_subset: "pitching",
                review: "Good Job",
                rating: "4.75",
                reviewer_user_id: "2",
                reviewed_user_id: "1",
                skills_id: 1
            },
        ])
    })
}