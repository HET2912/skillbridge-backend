const express = require("express");
const router = express.Router();
const submissionController = require("../Controllers/submissionController");
const auth = require("../Middleware/AuthMiddleware");

// ✅ Create a new submission
router.post("/", auth, submissionController.createSubmission);

// ✅ Update a submission (e.g., grading or feedback)
router.put("/:id", auth, submissionController.updateSubmission);

// ✅ Delete a submission
router.delete("/:id", auth, submissionController.deleteSubmission);

// ✅ Get all submissions for a specific assignment
router.get("/assignment/:assignmentId", auth, submissionController.getSubmissionsByAssignmentId);

// ✅ Get all submissions by a specific student
router.get("/student/:studentId", auth, submissionController.getSubmissionsByStudentId);

module.exports = router;
