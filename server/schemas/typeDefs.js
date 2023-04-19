const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Birds {
    _id: ID
    name: String
    description: String
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
  }
  type Query {
    users: [User]!
    user(userId: ID!): User
  }
  type Mutation {
    addUser(name: String!): User
    logBird(userId: ID!, bird: String!): User
  }
`;

module.exports = typeDefs;
