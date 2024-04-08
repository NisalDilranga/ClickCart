const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'achintham63@gmail.com',
      pass: 'wjdo gxxa zbzz muwa'
    }
  });

  router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send('User not found.');
      }
  
      const token = jwt.sign({ _id: user._id }, 'secret_key123', { expiresIn: '20m' });
      await transporter.sendMail({
        from: 'achintham63@gmail.com',
        to: email,
        subject: 'Password Reset Link',
        html: `<p>Please use the following link to reset your password: <a href="http://localhost:5173/reset-pass/${token}">Reset Password</a></p>`
      });
  
      user.resetToken = token;
      user.expireToken = Date.now() + 1200000;
      await user.save();
  
      res.send('Check your email for the password reset link.');
    } catch (error) {
      res.status(500).send('Error on forgot password.');
      console.log(error);
    }
  });
  router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;
    try {
      const user = await User.findOne({ resetToken: token, expireToken: { $gt: Date.now() } });
      if (!user) {
        return res.status(400).send('Token invalid or has expired.');
        console.log(error);
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      user.resetToken = undefined;
      user.expireToken = undefined;
      await user.save();
  
      res.send('Password has been successfully reset.');
    } catch (error) {
      res.status(500).send('Error resetting password.');
    }
  });
  
  module.exports = router;