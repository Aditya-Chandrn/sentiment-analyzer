const ConnectMongoDB = require("./db/mongoDB");
ConnectMongoDB();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: '*',
    methods: ['POST','GET'],
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const AuthRouter = require("./routes/AuthRouter");
const ImageRouter = require("./routes/ImageRouter");
const FetchRouter = require("./routes/FetchUrl");
const fetchCallRecords = require("./controllers/CallContoller");

app.use("/api",AuthRouter); 
app.use("/api",ImageRouter);
app.use("/api",FetchRouter);

fetchCallRecords();

require("dotenv").config();
PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Server listening to port ${PORT}`));