const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const categorySchema = new Schema({
    Size: {
        type: String,
        required: true,
        trim: true
    },
    bodyColor: {
        type: String,
        required: true,
        trim: true
    },
    headColor: {
        type: String,
        required: true,
        trim: true

    }
});


const Category = model('Category', categorySchema)


module.exports = Category;


