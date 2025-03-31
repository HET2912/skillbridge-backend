const { Submission } = require("../Models/Course");

// ✅ Add a new submission
exports.createSubmission = async (req, res) => {
  try {
    const submission = new Submission({ ...req.body, submittedBy: req.user.id });
    await submission.save();
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a submission (for example, updating grade or feedback)
exports.updateSubmission = async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!submission) return res.status(404).json({ message: "Submission not found" });
    res.json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a submission
exports.deleteSubmission = async (req, res) => {
  try {
    await Submission.findByIdAndDelete(req.params.id);
    res.json({ message: "Submission deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all submissions for a specific assignment
exports.getSubmissionsByAssignmentId = async (req, res) => {
  try {
    const submissions = await Submission.find({ assignment: req.params.assignmentId }).populate("submittedBy", "name email");
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all submissions by a specific student
exports.getSubmissionsByStudentId = async (req, res) => {
  try {
    const submissions = await Submission.find({ submittedBy: req.params.studentId }).populate("assignment");
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
