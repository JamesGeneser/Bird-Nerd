const { Birds, User, Post } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { insertMany } = require("../models/Birds");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    posts: async () => {
      return Post.find().sort({ createdAt: -1 });
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      //   const token = signToken(user);

      return user;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw + "correct password");
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log(token + "signToken returns");
      console.log(user);
      return { token, user };
    },

    logout() {
      localStorage.removeItem("id_token");
      window.location.assign("/");
    },

    addPost: async (parent, postText) => {
      const post = await Post.create(postText);
      return post;
    },

    deletePost: async (parent, { postId }) => {
      const post = await Post.findOneAndDelete({
        _id: postId,
        postAuthor: User._id,
      });

      await User.findOneAndUpdate(
        { _id: User._id },
        { $pull: { posts: post._id } }
      );
      return post;
    },

    logBird: async (parent, { userId, name }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { birdLog: name },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
