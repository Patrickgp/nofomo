const { gql } = require('apollo-server');

module.exports = gql`
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
    listing(ID: ID!): Listing!
    getListings(amount: Int): [Listing]
}

type Mutation {
    createListing(listingInput: ListingInput): Listing!
    deleteListing(ID: ID!): Boolean
    editListing(ID: ID!, listingInput: ListingInput): Boolean
}

`