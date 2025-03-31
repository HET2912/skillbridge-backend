const Profile = require("../Models/Profile");
const User = require("../Models/User");
const mongoose = require("mongoose");

exports.createProfile = async (req, res) => {
    try {
      const { name, role, bio, interests } = req.body;
      const userId = req.user.id; // Assuming authentication middleware
  
      // Check if profile already exists
      const existingProfile = await Profile.findOne({ user: userId });
      if (existingProfile) {
        return res.status(400).json({ message: "Profile already exists" });
      }
  
      // Create new profile
      const profile = new Profile({
        user: userId,
        name,
        role,
        bio,
        interests
      });
  
      await profile.save();
  
      // Update User with Profile ID
      await User.findByIdAndUpdate(userId, { profileId: profile._id }); 
  
      res.status(201).json(profile);
    } catch (error) {
      console.error("Error creating profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  
  exports.updateProfile = async (req, res) => {
    try {
      const userId = req.user.id;
      const updates = req.body;
  
      const profile = await Profile.findOneAndUpdate(
        { user: userId },
        { $set: updates },
        { new: true }
      );
  
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
  
      res.json(profile);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  exports.deleteProfile = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const profile = await Profile.findOneAndDelete({ user: userId });
  
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
  
      // Remove profile reference from User
      await User.findByIdAndUpdate(userId, { $unset: { profileId: "" } });
  
      res.json({ message: "Profile deleted successfully" });
    } catch (error) {
      console.error("Error deleting profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  exports.getAllProfiles = async (req, res) => {
    try {
      const profiles = await Profile.find().populate("user", "email role");
  
      res.json(profiles);
    } catch (error) {
      console.error("Error fetching profiles:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  exports.getProfileByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
  
      const profile = await Profile.findOne({ user: userId }).populate(
        "user",
        "email role"
      );
  
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
  
      res.json(profile);
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
        