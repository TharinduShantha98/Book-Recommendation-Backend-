const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { authenticateJWT } = require('../middlewares/authMiddleware');


router.get('/',authenticateJWT,bookController.getBooks);
router.get('/:id',authenticateJWT, bookController.getBook);
router.post('/', authenticateJWT,bookController.createBook);
router.put('/:id',authenticateJWT, bookController.updateBook);
router.delete('/:id',authenticateJWT, bookController.deleteBook);

module.exports = router;
