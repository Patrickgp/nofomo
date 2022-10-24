const { gql } = require('apollo-server');

module.exports = gql`
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
    name: String
    description: String
    price: Int
    createAt: String
}

input ListingInput {
    name: String
    description: String
    price: Int
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    listing(ID: ID!): Listing!
    getListings(amount: Int): [Listing]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createListing(listingInput: ListingInput): Listing!
    deleteListing(ID: ID!): Boolean
    editListing(ID: ID!, listingInput: ListingInput): Boolean
}

`