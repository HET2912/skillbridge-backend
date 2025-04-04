const mongoose = require("mongoose");

// Quiz Schema
const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true }
});

// Tour Schema
const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  quiz: { type: [quizSchema], default: [] }
});

// Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  tours: { type: [tourSchema], default: [] }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
