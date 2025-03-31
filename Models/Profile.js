const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      enum: ["learner", "tutor", "employer"],
      required: true
    },
    bio: {
      type: String,
      trim: true
    },
    interests: {
      type: [String], // Array of strings for multiple interests
      default: []
    },
    coursesEnrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
      }
    ],
    coursesCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
      }
    ],
    certifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Certification"
      }
    ],
    hiringChallengesCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HiringChallenge"
      }
    ],
    hiringChallengesSubmissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HiringChallengeSubmission"
      }
    ],
    quizResults: [
      {
        quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
        score: Number,
        totalQuestions: Number,
        percentage: Number,
        date: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
