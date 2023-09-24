const express = require('express');
const router = express.Router();
const getFileUrls = require("../controllers/CallContoller");
const {callRecord} = require("../models/CallModel");

// Define your route to fetch and store Firebase Storage URLs
router.get('/fetch_url', async (req, res) => {
  try {
    const folderPath = 'callRecords'; // Replace with your Firebase Storage folder path
    const fileUrls = await getFileUrls(folderPath);

    // Loop through the file URLs and create a callModel for each one
    for (let index = 0; index < fileUrls.length; index++) {
      const url = fileUrls[index];
      const callId = `call.${index + 1}`; // Assuming the callId format is call.1, call.2, ...
    
      const checkCall = await callRecord.findOne({callId : callId});
      if(checkCall) continue;
    
      console.log(callId);

      const newCall = new callRecord({
        callId: callId,
        callPath: url,
      });

      // Save the document to MongoDB
      await newCall.save();
    }

    res.status(200).json({ message: `${fileUrls.length} URLs fetched and stored successfully.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
