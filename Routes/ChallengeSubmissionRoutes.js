import express from "express";
import { getAllHiringChallenges,getHiringChallengeById,getHiringChallengesByCreator } from "../Controllers/ChallengeSubmissionController.js";

const router = express.Router();

router.get("/hiring-challenges", getAllHiringChallenges);
router.get("/hiring-challenges/:id", getHiringChallengeById);
router.get("/hiring-challenges/creator/:creatorId", getHiringChallengesByCreator);

export default router;
