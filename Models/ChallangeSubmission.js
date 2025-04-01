import mongoose from "mongoose";

const ChallengesubmissionSchema = new mongoose.Schema(
  {
    challengeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HiringChallenge",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    supportingDocuments: {
      type: [String],
      default: [],
    },
    otherURLs: {
      githubRepo: {
        type: String,
        default: "",
      },
      driveLink: {
        type: String,
        default: "",
      },
    },
    videoDemoURL: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "hired"], 
      default: "pending",
    },
    score: {
      type: Number,
      min: 0,
      max: 100, 
      default: null,
    },
    reviewFeedback: {
      type: String,
      default: "",
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const ChallengeSubmisson = mongoose.model("ChallengeSubmisson", ChallengesubmissionSchema);

export default ChallengeSubmission;
