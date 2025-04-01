const express = require("express");
const { 
    createHiringChallenge, 
    updateHiringChallenge, 
    deleteHiringChallenge,
    getHiringChallengeBySubmissionId,
    getAllHiringChallenges,
} = require("../Controllers/HiringChallengeController.js");

const router = express.Router();

router.post("/hiring-challenges", createHiringChallenge); 
router.put("/hiring-challenges/:id", updateHiringChallenge); 
router.delete("/hiring-challenges/:id", deleteHiringChallenge);
router.get("/hiring-challenges", getAllHiringChallenges);
router.get("/hiring-challenges/submission/:submissionId", getHiringChallengeBySubmissionId);

module.exports = router;
