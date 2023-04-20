const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is required.",
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required.",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be at least 6 characters long."
    ]
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: {email: {$type:"string"}}
    },
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
});

var User = model("User", UserSchema);

module.exports = User;