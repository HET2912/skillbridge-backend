const mongoose = require("mongoose");

// Assignment Schema
const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  week: { type: Number, required: true }, // Week-wise structure
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Instructor ID
});

// Assignment Submission Schema
const SubmissionSchema = new mongoose.Schema({
  assignment: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment", required: true },
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  submissionDate: { type: Date, default: Date.now },
  fileURL: { type: String, required: true }, // URL to submitted file
  grade: { 
    type: Number, 
    min: [0, "Grade cannot be negative"], 
    max: [100, "Grade cannot be more than 100"], 
    default: null 
  }, 
  feedback: { type: String, default: "" }, // Instructor feedback
});

// Course Schema
const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoLectures: [{ type: String, required: false }], // Video lectures can be added later
  quizzes: [
    {
      week: { type: Number, required: true },
      questions: [
        {
          question: { type: String, required: true },
          options: {
            type: [String],
            required: true,
            validate: {
              validator: (v) => v.length >= 2,
              message: "Each question must have at least two options.",
            },
          },
          correctAnswer: { type: String, required: true },
        },
      ],
    },
  ],
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }], // Linking assignments
  price: { 
    type: Number, 
    required: true, 
    min: [0, "Price cannot be negative"] 
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Instructor ID
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Students enrolled
  startDate: { type: Date, default: Date.now }, // Defaults to current date
  durationWeeks: { type: Number, required: true }, // Duration in weeks
});

const Course = mongoose.model("Course", CourseSchema);
const Assignment = mongoose.model("Assignment", AssignmentSchema);
const Submission = mongoose.model("Submission", SubmissionSchema);

module.exports = { Course, Assignment, Submission };
