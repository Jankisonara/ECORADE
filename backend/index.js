const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connect = require('./connection/DBconnect');
const userRouter = require('./router/userRouter');

const app = express();

// Connect to MongoDB
connect();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/users', userRouter); // This means your router file should have router.get('/')

// Server Listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
