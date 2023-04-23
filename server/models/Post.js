const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  bird: {
    type: String,
  },
  postText: {
    type: String,
    minLength: 1,
    maxLength: 280,
    created: Date.now,
  },
});

const Post = model("post", postSchema);

module.exports = Post;
