import HiringChallenge from "../Models/HiringChallenges.js"; // Adjust path as needed

// Create a new hiring challenge
export const createHiringChallenge = async (req, res) => {
  try {
    const newChallenge = new HiringChallenge(req.body);
    const savedChallenge = await newChallenge.save();
    res.status(201).json(savedChallenge);
  } catch (error) {
    res.status(500).json({ message: "Error creating challenge", error: error.message });
  }
};

// Update an existing hiring challenge by ID
export const updateHiringChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedChallenge = await HiringChallenge.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedChallenge) {
      return res.status(404).json({ message: "Hiring challenge not found" });
    }

    res.status(200).json(updatedChallenge);
  } catch (error) {
    res.status(500).json({ message: "Error updating challenge", error: error.message });
  }
};

// Delete a hiring challenge by ID
export const deleteHiringChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChallenge = await HiringChallenge.findByIdAndDelete(id);

    if (!deletedChallenge) {
      return res.status(404).json({ message: "Hiring challenge not found" });
    }

    res.status(200).json({ message: "Hiring challenge deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting challenge", error: error.message });
  }
};

// Get all hiring challenges
export const getAllHiringChallenges = async (req, res) => {
    try {
      const hiringChallenges = await HiringChallenge.find().populate("submissions");
      res.status(200).json(hiringChallenges);
    } catch (error) {
      res.status(500).json({ message: "Error fetching challenges", error: error.message });
    }
  };
//fetch a hiring by submission id
  export const getHiringChallengeBySubmissionId = async (req, res) => {
    try {
      const { submissionId } = req.params;
      const hiringChallengesBySubmissionId = await HiringChallenge.find({ submissions: submissionId }).populate("submissions");
  
      if (!hiringChallengesBySubmissionId.length) {
        return res.status(404).json({ message: "No hiring challenges found for this submission" });
      }
  
      res.status(200).json(hiringChallenges);
    } catch (error) {
      res.status(500).json({ message: "Error fetching challenges", error: error.message });
    }
  };
  