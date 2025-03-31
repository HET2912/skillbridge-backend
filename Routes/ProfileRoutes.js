const express = require("express");
const {
  createProfile,
  updateProfile,
  deleteProfile,
  getAllProfiles,
  getProfileByUserId,
} = require("../Controllers/ProfileControllers");
const protect = require("../Middleware/AuthMiddleware");

const router = express.Router();

// Create a Profile (Only for authenticated users)
router.post("/", protect, createProfile);

// Update Profile (Authenticated user can update their own profile)
router.put("/", protect, updateProfile);

// Delete Profile (Authenticated user can delete their own profile)
router.delete("/", protect, deleteProfile);

// Get All Profiles
router.get("/", getAllProfiles);

//Get Profile by User ID
router.get("/:userId", getProfileByUserId);

module.exports = router;
