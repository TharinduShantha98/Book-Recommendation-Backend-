const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { authenticateJWT } = require('../middlewares/authMiddleware');


router.post('/', authenticateJWT, reviewController.createReview);
router.get('/:bookId', reviewController.getReviews);
router.delete('/:reviewId', authenticateJWT, reviewController.deleteReview);

module.exports = router;
