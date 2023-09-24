const grid = require("gridfs-stream");
const mongoose = require("mongoose");
const router = require("express").Router();

let gfs;

const conn = mongoose.connection;
conn.once("open", () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("CallRecords");
});

router.get("/:filename", async (req,res) => {
    try{
        const file = await gfs.files.findOne({
            filename:
        })
    }
})

