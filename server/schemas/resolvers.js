const { Birds, User, Thought } = require("../models");

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
    addUser: async (parent, { name }) => {
      return User.create({ name });
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
