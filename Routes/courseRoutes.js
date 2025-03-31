const express = require("express");
const router = express.Router();
const courseController = require("../Controllers/courseController");
const auth = require("../Middleware/AuthMiddleware");

// ✅ Create a new course
router.post("/",auth, courseController.createCourse);

// ✅ Update an existing course
router.put("/:id",auth, courseController.updateCourse);

// ✅ Delete a course
router.delete("/:id",auth, courseController.deleteCourse);

// ✅ Get all courses
router.get("/", courseController.getAllCourses);

// ✅ Get a single course by ID
router.get("/:id",courseController.getCourseById);

// ✅ Add a student to a course
router.post("/:id/add-student", auth,  courseController.addStudent);

// ✅ Remove a student from a course
router.post("/:id/remove-student", auth,  courseController.removeStudent);

// ✅ Add an assignment to a course
router.post("/:courseId/add-assignment", auth, courseController.addAssignmentToCourse);

module.exports = router;
