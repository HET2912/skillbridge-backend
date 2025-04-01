
import express from "express";
import { 
    createHiringChallenge, 
    updateHiringChallenge, 
    deleteHiringChallenge,
    getHiringChallengeBySubmissionId,
    getAllHiringChallenges,
  } from "../Controllers/HiringChallengeController.js";


const router = express.Router();

router.post("/hiring-challenges", createHiringChallenge); 
router.put("/hiring-challenges/:id", updateHiringChallenge); 
router.delete("/hiring-challenges/:id", deleteHiringChallenge);
router.get("/hiring-challenges", getAllHiringChallenges);
router.get("/hiring-challenges/submission/:submissionId", getHiringChallengeBySubmissionId);

export default router;
