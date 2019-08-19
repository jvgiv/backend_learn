const graphql = require('graphql')
const User = require('../models/userModel.js')
// Need to do these models next
const Lesson = require('../models/lessonModel.js')
const Skills = require('../models/skillsModel.js')
const Reviews = require('../models/reviewModel.js')
// Need to make types in type file
const { UserType, LessonType, SkillsType, ReviewsType } = require('./types.js')

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;