const { Birds, User, Thoughts } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { insertMany } = require("../models/Birds");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    thoughts: async () => {
      return Thoughts.find().sort({ createdAt: -1 });
    },

    thought: async (parent, { thoughtId }) => {
      return Thoughts.findOne({ _id: thoughtId });
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

    addThought: async (parent, { thoughtText }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thoughts.findOneAndDelete({ _id: thoughtId });
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
