const mongoose = require("mongoose");

require("dotenv").config();

MONGODB_URI = process.env.MONGODB_URI;

const ConnectMongoDB = async () => {
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    
    const db = mongoose.connection;
    db.on("error",(error) => console.error("Error : ",error.message));
    db.once("open", () => console.log("Connected to database"));
}

module.exports = ConnectMongoDB;