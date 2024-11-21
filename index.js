const User = require('./models/userModel');
const connectToDb  = require('./config/db')
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const { authenticateJWT } = require('./middlewares/authMiddleware');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');



const app = express();

app.use(express.json());

connectToDb();
app.get('/protect',authenticateJWT, (req, res) => {
    res.send('Hello, Node.js!')
});

app.use('/api/auth', authRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/reviews', reviewRoutes);














const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



