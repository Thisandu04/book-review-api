const router = require('express').Router();
const { getBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', protect, createBook);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, deleteBook);
module.exports = router;