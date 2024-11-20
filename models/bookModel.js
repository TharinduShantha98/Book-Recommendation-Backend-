const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date },
    description: { type: String },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        //required: true 
    }
});

module.exports = mongoose.model('Book', BookSchema);
