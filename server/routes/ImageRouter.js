const router = require("express").Router();
const multer = require("multer");
const {bucket} = require("../firebaseConfig");

router.get("/callRecords",async (req,res) => {
    try {
        const [files] = await bucket.getFiles({ prefix: 'callRecords/' });
        const fileNames = files.map((file) => file.name);
        res.json({ files: fileNames });
      } catch (error) {
        console.error('Error fetching call records:', error);
        res.status(500).json({ error: 'Failed to fetch call records' });
      }
})

module.exports = router;