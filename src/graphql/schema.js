
const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const queries = require('./queries')

// here we are defining the querytype object 
const QueryType = new GraphQLObjectType({
    name: 'QueryTyoe',
    description: 'Queries',
    fields: queries
})

module.exports = new GraphQLSchema({
    query: QueryType
})