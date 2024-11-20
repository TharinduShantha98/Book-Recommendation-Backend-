const Book = require('../models/bookModel');


const getAllBooks = () => Book.find();
const getBookById = (id) => Book.findById(id);
const createBook = (data) => Book.create(data);
const updateBook = (id, data) => Book.findByIdAndUpdate(id, data, { new: true });
const deleteBook = (id) => Book.findByIdAndDelete(id);

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };

