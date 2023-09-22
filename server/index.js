const ConnectDB = require("./db");
ConnectDB();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['POST','GET'],
    credentials:true
}));

app.use(express.json());

const AuthRouter = require("./routes/AuthRouter");
app.use("/api",AuthRouter);

require("dotenv").config();
PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Server listening to port ${PORT}`));