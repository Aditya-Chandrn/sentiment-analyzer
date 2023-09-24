const mongoose = require('mongoose');
const {callRecord} = require("../models/CallModel");
const {bucket} = require("../firebaseConfig"); 

async function getFileUrls(folderPath) {
    const [files] = await bucket.getFiles({ prefix: folderPath });
  
    const fileUrls = await Promise.all(files.map(async (file) => {
      const [url] = await file.getSignedUrl({ action: 'read', expires: '01-01-2100' }); // Adjust expiration as needed
      return url;
    }));
  
    return fileUrls;
}

module.exports = getFileUrls;
  