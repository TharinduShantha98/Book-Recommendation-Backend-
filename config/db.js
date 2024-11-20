const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB URI and connection options
const uri = "mongodb+srv://tharindushantha4:oSbKPd9g7Zbqm2Bg@clusterb1.6xt8g.mongodb.net/?retryWrites=true&w=majority&appName=ClusterB1";

// MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  connectTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 30000,  // 30 seconds
});

// Function to connect to MongoDB and perform operations
async function connectToDb() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB Atlas successfully!");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    return client;
  } catch (err) {
    console.error('Error occurred while connecting to the database:', err.message);
    throw err; // Rethrow the error for further handling in index.js
  }
}


module.exports = connectToDb;
