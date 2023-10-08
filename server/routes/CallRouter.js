import { Router } from "express";
import multer from "multer";

import createCall from "../controllers/callController/createCall.js";
import fetchCall from "../controllers/callController/fetchCall.js";
import fetchAllCalls from "../controllers/callController/fetchAllCalls.js";

const router = Router();
const upload = multer();

const uploadMiddleWare = upload.fields([
    {
        name: "empAudioFile",
        maxCount: 1
    },
    {
        name: "customerAudioFile",
        maxCount: 1
    }
]);

router.post("/create", uploadMiddleWare, (req,res) => {
    res.header("Content-Type","multipart/form-data");
    const empAudioFile = req.files["empAudioFile"][0].buffer;
    const customerAudioFile = req.files["customerAudioFile"][0].buffer;
    const callData = req.body;
    callData.empAudioFile = empAudioFile;
    callData.customerAudioFile = customerAudioFile;
    createCall(callData);
})

router.get("/fetch/:id", async (req,res) => {
    const data = await fetchCall(req.params.id);
    res.send(data);
})

router.get("/fetch", async (req,res) => {
    const data = await fetchAllCalls();
    res.send(data);
})

export default router;