const graphql = require('graphql')
const User = require('../models/userModel.js')
const Lesson = require('../models/lessonModel.js')
const Skills = require('../models/skillsModel.js')
const Reviews = require('../models/reviewModel.js')
// Need to make types in type file
const { UserType, LessonType, SkillsType, ReviewsType } = require('./types.js')

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            description: 'Gets all users.',
            resolve() {
                return User.find()
                    .then(res => {
                        if (res.length) {
                            return res;
                        }
                        return new Error("The users could not be found.")
                    })
                    .catch(() => {
                        return new Error("There was an error completing your request.")
                    })
            }
        },
        getUserById: {
            type: UserType,
            description: "Gets a user by ID",
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parent, args) {
                return User.findById(args.id)
                    .then(res => {
                        if (res) {
                            return res
                        }
                        return new Error("The user could not be found.")
                    })
                    .catch(() => {
                        return new Error("There was an error completing your request.")
                    })
            }
        },
        getLessons: {
            type: LessonType,
            description: "Gets all lessons",
            resolve(parent, args) {
                return Lesson.find()
                    .then(res => {
                        if (res.length) {
                            return res
                        }
                        return new Error("The lessons could not be found.")
                    })
                    .catch(() => {
                        return new Error("There was an error completing your request.")
                    })
            }
        },
        getSkills: {
            type: SkillsType,
            description: "Fetches a list of available skills",
            resolve(parents, args) {
                return Skills.find()
                    .then(res => {
                        if (res.length) {
                            return res
                        }
                        return new Error("The skills could not be found.")
                    })
                    .catch(() => {
                        return new Error("There was an error completing your request")
                    })
            }
        },
        getSkillsById: {
            type: SkillsType,
            description: "Fetches skills by their IDs",
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parent, args) {
                return Skills.findById(args.id) 
                    .then(res => {
                        if (res.length) {
                            return res
                        }
                        return new Error("Couldn't find that skill.")
                    })
                    .catch(() => {
                        return new Error("There was an error completing your request.")
                    })
            }
        },
        getReviews: {
            type: ReviewsType,
            description: "Fetches a list of all reviews.",
            resolve(parents, args) {
                return Reviews.find()
                    .then(res => {
                        if (res.length) {
                            return res
                        }
                        return new Error("The reviews could not be found.")
                    })
                    .catch(() => {
                        return new Error("There was an error completing your request.")
                    })
            }
        },
        getReviewsById: {
            type: ReviewsType,
            description: "Gets review by ID.",
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parent, argss) {
                return Reviews.findById(args.id)
                    .then(res => {
                        if (res.length) {
                            return res
                        }
                        return new Error("Couldn't find that skill.")
                    })
                    .catch(() => {
                        return new Error("There was an error completing your request.")
                    })
            }
        }
    }
})

module.exports = RootQuery