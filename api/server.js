const express = require('express')
const applyMiddleware = require('./middleware.js')
const graphqlHTTP = require('express-graphql')
const schema = require('../schema/schema.js')
const expressPlayground = require('graphql-playground-middleware-express')
    .default;
const server = express()

applyMiddleware(server)

server.get('/playground', expressPlayground({ endpoint: '/graphql' }))


server.get('/', (req, res) => {
    res.send("The server is running.")
})

server.use(
    '/graphql', 
    graphqlHTTP({
        schema,
        graphiql: false
    })
)

module.exports = server