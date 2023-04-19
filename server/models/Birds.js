const { Schema } = require("mongoose");

const birdSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  }
})

const Birds = mongoose.model('Birds', birdSchema)

module.exports = { Birds };
