const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/VerifyToken');
const { addUser, login, getUsers } = require('../controller/userController');

// Public routes
router.post('/register', addUser);
router.post('/login', login);

// Protected route to fetch all users (e.g. for admin)
router.get('/', verifyToken, getUsers);


module.exports = router;
