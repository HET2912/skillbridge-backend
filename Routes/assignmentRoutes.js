const express = require("express");
const router = express.Router();
const assignmentController = require("../Controllers/assignmentController");
const auth = require("../Middleware/AuthMiddleware");

// ✅ Create an assignment
router.post("/", auth , assignmentController.createAssignment);

// ✅ Update an assignment
router.put("/:id", auth, assignmentController.updateAssignment);

// ✅ Delete an assignment
router.delete("/:id", auth, assignmentController.deleteAssignment);

// ✅ Get an assignment by ID
router.get("/:id", auth, assignmentController.getAssignmentById);

module.exports = router;
