const { Birds, User } = require("../models");
const { insertMany } = require("../models/Birds");



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
