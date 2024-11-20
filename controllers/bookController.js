const bookService = require('../services/bookService');

const getBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};

const getBook = async (req, res) => {
    const book = await bookService.getBookById(req.params.id);
    book ? res.json(book) : res.status(404).send('Book not found');
};

const createBook = async (req, res) => {
    const userId = req.user.id;
    console.log(userId);
    const bookData = {
        ...req.body,
        userId: userId,
    };

    console.log(bookData);
    const book = await bookService.createBook(bookData);
    res.status(201).json(book);
};

const updateBook = async (req, res) => {
    const book = await bookService.updateBook(req.params.id, req.body);
    book ? res.json(book) : res.status(404).send('Book not found');
};

const deleteBook = async (req, res) => {
    const book = await bookService.deleteBook(req.params.id);
    book ? res.send('Book deleted') : res.status(404).send('Book not found');
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };
