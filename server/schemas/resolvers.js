const { Birds, User, Thought } = require("../models");
const { signToken } = require("../utils/auth");

const { insertMany } = require("../models/Birds");

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
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
      const token = signToken(user);

      return { token, user };
      //todo: incluce utilsAuth on backend; (will have sign token method); in mutation, call signToken function; pass in the user just created (on 20); return out an obj that has token and user
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
