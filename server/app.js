//in-bult importts
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import EmployeeRouter from "./routes/employeeRouter.js";
import CallRouter from "./routes/callRouter.js";
import ProductRouter from "./routes/productRouter.js";
import PerformanceRouter from "./routes/performanceRouter.js";
import addMockData from './addMockData.js';


//app setup
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['POST','GET'],
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/api/employee",EmployeeRouter);
app.use("/api/call",CallRouter);
app.use("/api/product",ProductRouter);
app.use("/api/performance",PerformanceRouter);

dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server listening to port ${PORT}`));