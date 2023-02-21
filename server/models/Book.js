const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    updated_date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = Book = mongoose.model('book', BookSchema);
