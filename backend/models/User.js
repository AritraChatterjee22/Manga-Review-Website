const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  upvotedReviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
  downvotedReviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
