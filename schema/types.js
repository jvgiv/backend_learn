const graphql = require('graphql')
const User = require('../models/userModel')
const Lesson = require('../models/lessonModel')
const Skills = require('../models/skillsModel')
const Reviews = require('../models/reviewModel')

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean
} = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        bio: { type: GraphQLString },
        picture: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        user_type: { type: GraphQLString },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
        facebook_id: { type: GraphQLFloat },
        google_id: { type: GraphQLFloat },
        earnings: { type: GraphQLFloat },
        skills: { 
            type: new GraphQLList(SkillsType),
            resolve(parent, args) {
                return Skills.findByUserId(parent.id)
            }  
        },
        lessons_taken: { 
            type: new GraphQLList(LessonType),
            resolve(parent, args) {
                return Lessons.findByUserId(parent.id)
            }  
        },
        lessons_given: { 
            type: new GraphQLList(LessonType),
            resolve(parent, args) {
                return Lessons.findByUserId(parent.id)
            }  
        },
        reviews_written: {
            type: new GraphQLList(ReviewsType),
            resolve(parent, args) {
                return Reviews.findByUserId(parent.id)
            }
        },
        reviews_about: {
            type: new GraphQLList(ReviewsType),
            resolve(parent, args) {
                return Reviews.findByUserId(parent.id)
            }
        }
    })
})

const LessonType = new GraphQLObjectType({
    name: 'Lesson',
    fields: () => ({
        id: { type: GraphQLID },
        location: { type: GraphQLString },
        date: { type: GraphQLString },
        length_hours: { type: GraphQLFloat },
        cost: { type: GraphQLFloat },
        lesson_giver_id: { type: new GraphQLNonNull(GraphQLID) },
        user_lesson_giver: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.lesson_giver_id)
            }
        },
        lesson_taker_id: { type: new GraphQLNonNull(GraphQLID) },
        user_lesson_taker: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.lesson_giver_id)
            }
        },
        approved_by_giver: {type: GraphQLBoolean }, 
        completed: {type: GraphQLBoolean }
    })
})

const SkillsType = new GraphQLObjectType({
    name: 'Skills',
    fields: () => ({
        id: { type: GraphQLID },
        user_id: { type: new GraphQLNonNull(GraphQLID) },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.user_id)
            }
        },
        skill: { type: GraphQLString },
        skill_subset: { type: GraphQLString },
        description: { type: GraphQLString },
        years_experience: { type: GraphQLInt },
        hourly_rate: { type: GraphQLFloat }
    })
})

const ReviewsType = new GraphQLObjectType({
    name: 'Reviews',
    fields: () => ({
        id: { type: GraphQLID },
        skills_id: { type: new GraphQLNonNull(GraphQLID) },
        review_skill: { type: GraphQLString },
        review_skill_subset: { type: GraphQLString },
        review: { type: GraphQLString },
        reviewed_user_id: { type: new GraphQLNonNull(GraphQLID) },
        review_author: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.reviewer_user_id)
            }
        },
        reviewer_user_id: { type: new GraphQLNonNull(GraphQLID) },
        review_target: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.reviewer_user_id)
            }
        }
    })
})







module.exports = {
    UserType,
    SkillsType,
    LessonType,
    ReviewsType
}