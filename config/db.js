const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;
const uri = DATABASE_URL;
async function connectToDb() {
  try {
    // Increasing timeout values for connection
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000, // Increased to 50 seconds
      socketTimeoutMS: 60000, // Increased to 60 seconds
    });

    console.log("Connected to MongoDB Atlas successfully!");
  } catch (err) {
    console.error('Error occurred while connecting to the database:', err.message);
    throw err;
  }
}

module.exports = connectToDb;
