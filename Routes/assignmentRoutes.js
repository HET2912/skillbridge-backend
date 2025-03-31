const express = require("express");
const router = express.Router();
const assignmentController = require("../Controllers/assignmentController");

// ✅ Create an assignment
router.post("/", assignmentController.createAssignment);

// ✅ Update an assignment
router.put("/:id", assignmentController.updateAssignment);

// ✅ Delete an assignment
router.delete("/:id", assignmentController.deleteAssignment);

// ✅ Get an assignment by ID
router.get("/:id", assignmentController.getAssignmentById);

module.exports = router;
