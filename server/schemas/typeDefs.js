const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Birds {
    _id: ID
    name: String
    description: String
  }
  type Post {
    _id: ID
    bird: String
    postText: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]!
    user(userId: ID!): User
    posts: [Post]!
    post(postId: ID!): Post
    bird(birdId: ID!): Birds
    me: User
    isAuthenticated: Boolean!
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    logBird(userId: ID!, birdId: String!): User
    addPost(bird: String!, postText: String!): Post
    deletePost(postId: ID!): Post
    login(email: String!, password: String!): Auth
    logout: Boolean!
  }
`;

module.exports = typeDefs;
