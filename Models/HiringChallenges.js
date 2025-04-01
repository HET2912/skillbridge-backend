import mongoose from "mongoose";

const hiringChallengeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructions: {
      type: [String],
      default: [],
    },
    roleOffered: {
      type: String,
      required: true,
    },
    packageRange: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: [String],
      default: [],
    },
    projectSubmissionFormatURL: {
      type: String,
      default: "",
    },
    additionalDocumentsURL: {
      type: String,
      default: "",
    },
    submissions: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Submission", 
      default: [],
    },
    lastDateToSubmit: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const HiringChallenge = mongoose.model("HiringChallenge", hiringChallengeSchema);

export default HiringChallenge;
