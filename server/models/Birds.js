const {Schema} = require("mongoose");


const birdSchema = new Schema({
    birdType: 
        { type: String,
            required: true,
        },
        bodyColor:
         {
            type: String,
            required: true,
        },
        size: 
        {
type: String,
required: true
        }
    
});


module.exports = {birdSchema}

