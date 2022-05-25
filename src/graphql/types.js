// Here we are importing mongoose models
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const { Post, User } = require('../models')

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID},
        username: { type: GraphQLString},
        email: { type: GraphQLString}
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        id: { type: GraphQLID },
        body: { type: GraphQLString}
    })
})

module.exports = {
    UserType,
    PostType
}