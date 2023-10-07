------------ FIREBASE STORAGE FILE UPLOAD CODE -------------
    
    const callBuffer = Buffer.from(callFile);
    const folderName = "callAudio";
    const fileName = `${folderName}/${id}.audio`;

    const file = bucket.file(fileName);

    console.log("Uploading File");
    const writeStream = file.createWriteStream({
        metadata: {
            contentType: "audio/wav"
        }
    })

    writeStream.on('error', (error => {
        console.error("Error uploading : ", error.message);
    }))

    writeStream.on('finish', async () => {
    writeStream.end(callBuffer);