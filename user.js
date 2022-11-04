const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Must provide a name'],
    trim: true,
  },
  log: {
    type: Array
  }


});

module.exports = mongoose.model('User', UserSchema);
