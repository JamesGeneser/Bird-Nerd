const { Schema, model } = require("mongoose");

// create Thought model
const thoughtSchema = new Schema({
  thought: {
    type: String,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // format the timestamp on the query
    get: (date) => {
      if (date) return date.toString().split("G")[0];
    },
  },
  user: {
    type: String,
  },
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
