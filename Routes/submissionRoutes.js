const express = require("express");
const router = express.Router();
const submissionController = require("../Controllers/submissionController");

// ✅ Create a new submission
router.post("/", submissionController.createSubmission);

// ✅ Update a submission (e.g., grading or feedback)
router.put("/:id", submissionController.updateSubmission);

// ✅ Delete a submission
router.delete("/:id", submissionController.deleteSubmission);

// ✅ Get all submissions for a specific assignment
router.get("/assignment/:assignmentId", submissionController.getSubmissionsByAssignmentId);

// ✅ Get all submissions by a specific student
router.get("/student/:studentId", submissionController.getSubmissionsByStudentId);

module.exports = router;
