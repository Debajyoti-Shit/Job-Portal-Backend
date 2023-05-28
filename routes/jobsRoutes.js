import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  createJobController,
  getAllJobsController,
  updateJobController,
  deleteJobController,
  jobStatsController,
} from "../controllers/jobsController.js";

const router = express.Router();

//router
//CREATE JOB || POST
router.post("/create-job", userAuth, createJobController);
// CREATE JOB || POST
router.get("/get-job", userAuth, getAllJobsController);
// UPDATE JOB || PATCH
router.patch("/update-job/:id", userAuth, updateJobController);
// DELETE JOB || DELETE
router.delete("/delete-job/:id", userAuth, deleteJobController);

// JOBS STATS FILTER || GRT
router.get("/job-stats", userAuth, jobStatsController);

export default router;
