const express = require("express");
const router = express.Router();
const courseController = require("../Controllers/courseController");

// ✅ Create a new course
router.post("/", courseController.createCourse);

// ✅ Update an existing course
router.put("/:id", courseController.updateCourse);

// ✅ Delete a course
router.delete("/:id", courseController.deleteCourse);

// ✅ Get all courses
router.get("/", courseController.getAllCourses);

// ✅ Get a single course by ID
router.get("/:id", courseController.getCourseById);

// ✅ Add a student to a course
router.post("/:id/add-student", courseController.addStudent);

// ✅ Remove a student from a course
router.post("/:id/remove-student", courseController.removeStudent);

// ✅ Add an assignment to a course
router.post("/:courseId/add-assignment", courseController.addAssignmentToCourse);

module.exports = router;
