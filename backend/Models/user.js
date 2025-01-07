// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // define the schema here
});

const User = mongoose.model('User ', userSchema);

module.exports = User;