import { Router } from "express";
import evaluatePerformance from "../controllers/performanceController.js";

const router = Router();

router.post("/", (req,res) => {
    const callData = req.body;
    evaluatePerformance(callData);
    res.send("Receieved employee performance successfully.");
});

export default router;