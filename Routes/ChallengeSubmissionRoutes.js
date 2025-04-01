const express = require("express");
const { getAllHiringChallenges, getHiringChallengeById, getHiringChallengesByCreator } = require("../Controllers/ChallengeSubmissionController.js");

const router = express.Router();

router.get("/hiring-challenges", getAllHiringChallenges);
router.get("/hiring-challenges/:id", getHiringChallengeById);
router.get("/hiring-challenges/creator/:creatorId", getHiringChallengesByCreator);

module.exports = router;
