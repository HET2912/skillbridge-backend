const mongoose = require("mongoose");

const learningModuleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fileURL: {
      type: String,
      required: true,
    },
    extractedText: {
      type: String,
      default: "",
    },
    generatedQuizzes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Quiz", 
      default: [],
    },
    progress: {
      completedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User", 
        default: [],
      },
      averageScore: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const LearningModule = mongoose.model("LearningModule", learningModuleSchema);

module.exports = LearningModule;
