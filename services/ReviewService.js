const Review = require('../models/reviewModel');
const Book = require('../models/userModel');  


const createReview = async (bookId, userId, reviewText, rating) => {
    try {
        const review = new Review({
            bookId,
            userId,
            reviewText,
            rating,
        });

      
        return await review.save();
    } catch (error) {
        throw new Error('Error creating review: ' + error.message);
    }
};


const getReviewsByBookId = async (bookId) => {
    try {
        const reviews = await Review.find({ bookId })
            .populate('userId', 'name email')  
            .exec();
        return reviews;
    } catch (error) {
        throw new Error('Error fetching reviews: ' + error.message);
    }
};


const deleteReview = async (reviewId) => {
    try {
        const result = await Review.deleteOne({ _id: reviewId });
        return result.deletedCount > 0; 
    } catch (error) {
        throw new Error('Error deleting review: ' + error.message);
    }
};

module.exports = { createReview, getReviewsByBookId, deleteReview };
