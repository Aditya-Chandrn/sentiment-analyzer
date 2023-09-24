const upload = require("../middlewares/UploadMiddleware");
const router = require("express").Router();

router.post("/upload",upload.single("file"), async(req,res) => {
    if(req.file === undefined) 
        return res.send("You must select a file.");

    const audioUrl = `http://localhost:5000/api/file/${req.file.filename}`;
    return res.send(audioUrl);
})

module.exports = router;