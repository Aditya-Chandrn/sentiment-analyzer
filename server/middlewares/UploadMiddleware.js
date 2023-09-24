const multer = require("multer");
const gridFsStorage = require("multer-gridfs-storage");

require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

const storage = new gridFsStorage({
    url: MONGODB_URI,
    options: {useNewUrlParser : true, useUnifiedTopology : true},
    file: (req,file) => {
        const match = ["audio/mpeg","audio/wav"];

        if(match.indexOf(file.mimetype) === -1){
            const filename = `${Date.now()}${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "CallRecords",
            filename: `${Date.now()}${file.originalname}`
        }
    }
});

module.exports = multer({storage});