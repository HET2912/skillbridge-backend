const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LearningModule",
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 100, 
    },
    certificationHash: {
      type: String,
      required: true,
      unique: true,
    },
    issuedAt: {
      type: Date,
      default: Date.now, 
    },
  },
  {
    timestamps: true,
  }
);

const Certification = mongoose.model("Certification", certificationSchema);

module.exports = Certification;
