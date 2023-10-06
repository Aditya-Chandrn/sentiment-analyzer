import { Router } from "express";
import multer from "multer";

import createCall from "../controllers/callController/createCall.js";
import fetchCall from "../controllers/callController/fetchCall.js";
import fetchAllCalls from "../controllers/callController/fetchAllCalls.js";

const router = Router();
const upload = multer();

router.post("/create", upload.single('callFile'), (req,res) => {
    res.header("Content-Type","multipart/form-data");
    const callFile = req.file.buffer;
    const {empId, prodId, createdDate, createdTime} = req.body;
    createCall(callFile, empId, prodId, createdDate, createdTime);
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