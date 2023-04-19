const { Birds, User } = require("../models");

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
  },
  Mutation: {
    addUser: async (parent, { name }) => {
      return User.create({ name });
    },
    logBird: async (parent, { name }) => {
      return User.findOneAndUpdate(
        { _id: profileId },
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
