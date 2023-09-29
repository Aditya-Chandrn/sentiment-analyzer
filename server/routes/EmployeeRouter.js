import { Router } from "express";
import multer from "multer";
import createEmployee from "../controllers/employeeController/createEmployee.js";
import fetchEmployee from "../controllers/employeeController/fetchEmployee.js";
import fetchAllEmployees from "../controllers/employeeController/fetchAllEmployees.js";

const router = Router();
const upload = multer();

router.post("/create", upload.single('image'), (req,res) => {
    res.header("Content-Type","multipart/form-data");
    const image = req.file.buffer;
    const {fname,lname,joined,type} = req.body;
    createEmployee(image, fname, lname, joined, type);
})

router.get("/fetch/:id", async (req,res) => {
    const data = await fetchEmployee(req.params.id);
    res.send(data);
})

router.get("/fetch", async (req,res) => {
    const data = await fetchAllEmployees();
    res.send(data);
})

export default router;