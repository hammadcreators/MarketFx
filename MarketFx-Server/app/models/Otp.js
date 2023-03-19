const mongoose = require('mongoose');
const { Schema } = mongoose;

const otpSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  secret: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 120 // TTL of 2 minutes
  }
});

const Otp = mongoose.model('Otp', otpSchema);

module.exports = Otp;
