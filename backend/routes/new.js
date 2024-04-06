const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../model/User');

const router = express.Router();
const bcrypt = require('bcrypt');





// Register route
router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email , password } = req.body;

    // Find the user by username
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed: Incorrect password' });
    }

    // If user is found and password matches, create a JWT token
    // Replace 'hardcoded_secret_key' with your actual secret key
    const token = jwt.sign({ userId: user._id }, 'secret_key123', { expiresIn: '1h' });
    res.status(200).json({ token });
    console.log("login");
  } catch (error) {
    console.error(`Login error: ${error.message}`);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Assuming you are using Express.js and JWT for authentication

// Logout endpoint
router.post('/logout', (req, res) => {
  // Inform the client to clear the token from storage
  res.status(200).send({ message: 'Logged out successfully' });
});









module.exports = router; 
