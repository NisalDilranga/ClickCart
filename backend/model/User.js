const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true, // Ensure emails are unique if needed
    // Add email validation if required
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "customer"], // Ensure role is one of these values
    default: "customer"
  }
});

// Pre-save hook to hash the password
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Optional: Method to compare password for login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
