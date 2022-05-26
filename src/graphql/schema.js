
const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const queries = require('./queries')
const mutations = require('./mutations')

// here we are defining the querytype object 
const QueryType = new GraphQLObjectType({
    name: 'QueryTyoe',
    description: 'Queries',
    fields: queries
})

// define the mutation type 
const MutationType = new GraphQLObjectType ({
    name: "MutationType",
    description: "Mutations",
    fields: mutations
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})