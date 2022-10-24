const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
}

type Auth {
    token: ID!
    user: User
}

type Listing {
    _id: ID
    listingText: String
    createdAt: String
    username: String
  }

type Query {
    me: User
    users: [User]
    user(username: String!): User
    listings(username: String): [Listing]
    listing(_id: ID!): Listing
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addListing(listingText: String!): Listing
}

`
module.exports = typeDefs;