const { User, Thought } = require("../models");

module.exports = {
  // all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // single user by its id and populate data
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User with that ID Found." })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // update a user by its id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $set: body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(400).json({ message: "No User with this ID Found." })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // remove user by its id
  deleteUser({ params }, res) {
    User.findOneAndRemove({ _id: params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User with this ID Found." })
          : res.json({ message: "User has been deleted." })
      )
      .catch((err) => res.status(500).json(err));
  },
};