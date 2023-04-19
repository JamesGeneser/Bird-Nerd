const { Schema, model } = require("mongoose");

const birdSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  bodyColor: {
    type: String,
  },
  headColor: {
    type: String,
  },
});

const Birds = model("birds", birdSchema);

module.exports = Birds;
