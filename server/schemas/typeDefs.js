const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    listings: [Listing]
    orders: [Order]
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Review {
    reviewId: ID!
    reviewBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Listing {
    listingId: ID!
    listingText: String
    createdAt: String
    username: String
    reviewCount: Int
    reviews: [Review]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    listings(username: String): [Listing]
    listing(_id: ID!): Listing
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addListing(listingText: String!): Listing
    addReview(username: String!, reviewBody: String!): Review
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
  }
`;
module.exports = typeDefs;
