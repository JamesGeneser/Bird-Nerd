const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  bird: {
    type: String,
  },
  postText: {
    type: String,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
  },
});

const Post = model("post", postSchema);

module.exports = Post;
