const { Schema, model } = require("mongoose");

const birdSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
});

const Birds = model("Birds", birdSchema);

module.exports = Birds;
