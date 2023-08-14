const mongoose = require("mongoose");

const book_schema = new mongoose.Schema({
  bookTitle: String,
  description: String,
  bookPrice: String,
  goodreadsLink: String,
  // country: String,
  // city: String,
});

const Bookdb = mongoose.model("book", book_schema);

module.exports = Bookdb;
