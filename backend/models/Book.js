const {Schema, model} = require('mongoose');

const BookSchema = new Schema({
    title: {Type: String, required: true},
    author: {Type: String, required: true},
    isbn: {Type: String, required: true},
    imagePatch: {Type: String, required: true},
    created_at: {Type: Date, default: Date.now}

});

module.exports = model('Book', BookSchema);