import { Router } from "express";

const router = Router();

router.post("/", (req,res) => {
    const result = req.body;
    console.log(result);
    res.send("Receieved employee performance successfully.");
});

export default router;