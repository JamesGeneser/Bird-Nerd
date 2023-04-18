const {Schema} = require("mongoose");


const birdSchema = new Schema({
    birds: [
        { type: String
        }
    ]
});


module.exports = birdSchema

