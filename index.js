const User = require('./models/userModel');
const connectToDb  = require('./config/db')
const express = require('express');

const app = express();


connectToDb();

app.get('/', (req, res) => {
    res.send('Hello, Node.js!')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


