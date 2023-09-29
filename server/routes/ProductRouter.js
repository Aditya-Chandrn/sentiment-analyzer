import { Router } from "express";
import multer from "multer";
import createProduct from "../controllers/productController/createProduct.js";
import fetchProduct from "../controllers/productController/fetchProduct.js";
import fetchAllProducts from "../controllers/productController/fetchAllProducts.js";

const router = Router();
const upload = multer();

router.post("/create", upload.single('image'), (req,res) => {
    res.header("Content-Type","multipart/form-data");
    const image = req.file.buffer;
    const {prodName, createdAt, prodNo} = req.body;
    console.log(prodName, createdAt, prodNo, image);
    createProduct(image, prodName, createdAt, prodNo);
})

router.get("/fetch/:id", async (req,res) => {
    const data = await fetchProduct(req.params.id);
    res.send(data);
})

router.get("/fetch", async (req,res) => {
    const data = await fetchAllProducts();
    res.send(data);
})

export default router;