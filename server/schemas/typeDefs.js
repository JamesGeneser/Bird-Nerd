const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Birds {
    _id: ID
    name: String
    description: String
  }
  type Post {
    _id: ID
    bird: [Birds]
    postText: String
    postAuthor: String
    createdAt: String
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
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    logBird(userId: ID!, birdId: String!): User

    addPost(bird: String!, postText: String!, postAuthor: String!): Post
    deletePost(postId: ID!): Post

    login(email: String!, password: String!): Auth
    logout(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
