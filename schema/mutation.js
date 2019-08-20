const graphql = require('graphql')
const User = require('../models/userModel.js')
const Lesson = require('../models/lessonModel.js')
const Skills = require('../models/skillsModel.js')
const Reviews = require('../models/reviewModel.js')
const { UserType, LessonType, SkillsType, ReviewsType } = require('./types.js');

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


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            args: {
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
                rating: { type: GraphQLFloat },
                number_of_ratings: { type: GraphQLInt },
            },
            resolve(parent, args) {
                return User.insert(args)
                    .then(res => {
                        if (res) {
                          return res;
                        }
                        return new Error('The new user could not be created.');
                      })
                    .catch(() => {
                        return new Error('There was an error completing your request.');
                      })
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
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
                rating: { type: GraphQLFloat },
                number_of_ratings: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return User.update(args.id, args)
                  .then(res => {
                    if (res) {
                      return res;
                    }
                    return new Error('The user could not be updated.');
                  })
                  .catch(() => {
                    return new Error('There was an error completing your request.');
                  });
              }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return User.remove(args.id);
      }
        },
        addLesson: {
            location: { type: GraphQLString },
            date: { type: GraphQLString },
            length_hours: { type: GraphQLFloat },
            cost: { type: GraphQLFloat },
            lesson_giver_id: { type: new GraphQLNonNull(GraphQLID) },
            lesson_taker_id: { type: new GraphQLNonNull(GraphQLID) },
            approved_by_giver: {type: GraphQLBoolean }, 
            completed: {type: GraphQLBoolean }
        },
        updateLesson: {},
        deleteLesson: {},
        addSkill: {
            user_id: { type: new GraphQLNonNull(GraphQLID) },
            skill: { type: GraphQLString },
            skill_subset: { type: GraphQLString },
            description: { type: GraphQLString },
            years_experience: { type: GraphQLInt },
            hourly_rate: { type: GraphQLFloat }
        },
        updateSkill: {},
        deleteSkill: {},
        addReview: {
            skills_id: { type: new GraphQLNonNull(GraphQLID) },
            review_skill: { type: GraphQLString },
            review_skill_subset: { type: GraphQLString },
            review: { type: GraphQLString },
            rating: { type: GraphQLFloat },
            reviewed_user_id: { type: new GraphQLNonNull(GraphQLID) },
            reviewer_user_id: { type: new GraphQLNonNull(GraphQLID) },
        },
        updateReview: {},
        deleteReview: {}
    })
})