const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const app = express();
app.use(cors);
app.use(express.json());
dotenv.config();

PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Server listening at port ${PORT}`));