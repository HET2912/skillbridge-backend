const mongoose = require("mongoose");

// Define Quiz Schema
const QuizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

// Define Model (Tour) Schema
const ModelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // 3D Model Embed URL
  quiz: { type: [QuizSchema], required: true },
});

// Define Category Schema
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  models: { type: [ModelSchema], required: true },
});

module.exports = mongoose.model("Category", CategorySchema);
