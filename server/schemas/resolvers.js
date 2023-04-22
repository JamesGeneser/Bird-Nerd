const { Birds, User, Thought } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { insertMany } = require("../models/Birds");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    thoughts: async () => {
      return Thought.find().sort({ createdAt: -1 });
    },

    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
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
      //   const userData = await User.find({user{$eq:user._id}});
      //   const userDataId = entity[0]._id;

      const token = signToken(user);
      console.log(token + "signToken returns");
      console.log(user);
      return { token, user };
    },
    addThought: async (parent, { thoughtText }) => {
      return Thought.create({ thoughtText });
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
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
