const reviewService = require('../services/reviewService');


const createReview = async (req, res) => {
    const { bookId, reviewText, rating } = req.body;
    const userId = req.user.id;  

    try {
        const review = await reviewService.createReview(bookId, userId, reviewText, rating);
        res.status(201).json(review); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getReviews = async (req, res) => {
    const { bookId } = req.params;

    try {
        const reviews = await reviewService.getReviewsByBookId(bookId);
        if (reviews.length > 0) {
            res.json(reviews);
        } else {
            res.status(404).json({ message: 'No reviews found for this book' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteReview = async (req, res) => {
    const { reviewId } = req.params;

    try {
        const success = await reviewService.deleteReview(reviewId);
        if (success) {
            res.status(200).json({ message: 'Review deleted successfully' });
        } else {
            res.status(404).json({ message: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createReview, getReviews, deleteReview };
