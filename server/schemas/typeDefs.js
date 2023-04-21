const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Birds {
    _id: ID
    name: String
    description: String
  }
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    users: [User]!
    user(userId: ID!): User
    thoughts: [Thought]!
    thought(thoughtId: ID!): Thought
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    logBird(userId: ID!, bird: String!): User
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    removeThought(thoughtId: ID!): Thought
  }
`;

module.exports = typeDefs;
