const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 5,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { email: { $type: "string" } },
    },
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
});
UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  // console.log(password + "passed password");

  // const bcryptPromise = await bcrypt.compare(password, this.password);
  // console.log(bcryptPromise + " bcrypt promise");

  return bcrypt.compare(password, this.password);
};

const User = model("User", UserSchema);

module.exports = User;
