const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: "Book Review API is running! 🚀",
        endpoints: [
            "/api/auth",
            "/api/books",
            "/api/books/:bookId/reviews"
        ]
    });
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/books/:bookId/reviews', require('./routes/reviewRoutes'));

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT, () => 
    console.log(`Server running on port ${process.env.PORT}`)
);