const bookController = require('../controllers/bookController');
const bookService = require('../services/bookService');
const reviewService = require('../services/reviewService');
const { get } = require('./reviewRoutes');

async function handleCommand(command, message, args) {
    console.log("command " , command);
    console.log("command " , message);
    if (command === 'addbook') {
        if (!args.length) {
            return message.reply('Please provide a book title to add.');
        }
        const [title, author,description] = args; 
        console.log("bookTitle ",title);
        try {
            if (!title || !description) {
                return message.reply('Usage: `!addbook [add _title] [add _description]`');
            }
            const bookData = {
                title: title, author:author,userId:message.author.id,description:description
            };
            const book = await bookService.createBook(bookData);
            if(book){
                message.reply(`Book "${bookData.title}" has been added successfully!`);
            }else{
                message.reply(`Server Error!`);
            }
            
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while adding the book.');
        }
    } else if (command === 'listbooks') {
        try {
            const books = await bookService.getAllBooks();
            if (!books.length) {
                return message.reply('No books found in your library.');
            }
            const bookList = books.map((book, index) => `${index + 1}. ID: ${book._id}  Tittle :${book.title}`).join('\n');
            message.reply(`Here are your books:\n${bookList}`);
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while fetching your books.');
        }
    } else if (command === 'editbook') {
        const bookId = args[0];
        const newTitle = args.slice(1).join(' ');
        if (!bookId || !newTitle) {
            return message.reply('Usage: `!editbook [new _book ID] [new _title]`');
        }
        const bookData = {
            title: newTitle
        };
        try {
            const book = await bookService.updateBook(bookId, bookData)
            if (book) {
                message.reply(`Book ID ${bookId} has been updated to "${newTitle}".`);
            } else {
                message.reply(`Book with ID ${bookId} not found.`);
            }
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while updating the book.');
        }
    } else if (command === 'deletebook') {
        const bookId = args[0];
        if (!bookId) {
            return message.reply('Usage: `!deletebook [book ID]`');
        }
        try {
            const book = await bookService.deleteBook(bookId);
            if (book) {
                message.reply(`Book ID ${bookId} has been deleted.`);
            } else {
                message.reply(`Book with ID ${bookId} not found.`);
            }
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while deleting the book.');
        }
    }else if(command === 'addreview') {
        const [bookId,reviewText,rating] = args; 

        if(!bookId || !reviewText || !rating){
            return message.reply('Usage: `!addbook [add _bookID] [add _reviewText] [add _rating]`');
        }
        const createReview =  await reviewService.createReview(bookId,'',reviewText,rating);
        if(createReview){
            message.reply(`Review added scuccess for ${bookId}`);
        }else{
            message.reply(`An error occurred while adding the Review.`);
        }
    }else if (command === 'listreviews'){
        const [bookId] = args; 
        if(!bookId){
            return message.reply('Usage: `!addbook [add _bookID]`');
        }

        const getAllBooks =  await reviewService.getReviewsByBookId(bookId);
        console.log(getAllBooks);


        const bookList = getAllBooks.map((getAllBooks, index) => `${index + 1}. ID: ${getAllBooks._id}  review :${getAllBooks.reviewText}  rating :${getAllBooks.rating}`).join('\n');
        if(bookList){
            return message.reply(`Here are your reviews :\n${bookList}`);
        }else{
            return message.reply(`reviews not found!`);
        }

    }
    else {
        message.reply(`Unknown command: \`${command}\``);
    }
}

module.exports = { handleCommand };
