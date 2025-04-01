const ChallengeSubmission = require("../Models/ChallangeSubmission.js");

// Fetch all hiring challenges
exports.getAllHiringChallenges = async (req, res) => {
  try {
    const hiringChallenges = await ChallengeSubmission.find().populate("submissions");
    res.status(200).json(hiringChallenges);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenges", error: error.message });
  }
};

// Fetch a hiring challenge by ID
exports.getHiringChallengeById = async (req, res) => {
  try {
    const { id } = req.params;
    const hiringChallengesById = await ChallengeSubmission.findById(id).populate("submissions");

    if (!hiringChallengesById) {
      return res.status(404).json({ message: "Hiring challenge not found" });
    }

    res.status(200).json(hiringChallengesById);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenge", error: error.message });
  }
};

// Fetch all hiring challenges by createdBy's ID
exports.getHiringChallengesByCreator = async (req, res) => {
  try {
    const { creatorId } = req.params;
    const hiringChallengesByCreator = await ChallengeSubmission.find({ createdBy: creatorId }).populate("submissions");

    if (!hiringChallengesByCreator.length) {
      return res.status(404).json({ message: "No challenges found for this creator" });
    }

    res.status(200).json(hiringChallengesByCreator);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenges", error: error.message });
  }
};
