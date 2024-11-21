const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date },
    description: { type: String },
    userId: {type: String }
});

module.exports = mongoose.model('Book', BookSchema);
