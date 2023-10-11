import { config } from "dotenv";
import { Readable } from "stream";

import { driveService } from "../configs/googleDriveConfig.js";

config();
const DRIVE_FOLDER_ID = process.env.DRIVE_FOLDER_ID;

const uploadAudioToDrive = async (callId, empAudioFile, customerAudioFile) => {
    const empFileName = `${callId}.EMP.audio.wav`
    const customerFileName = `${callId}.CT.audio.wav`

    const folderId = await createFolder(callId);
    const empAudioDriveId = await uploadAudioFile(folderId, empFileName, empAudioFile);
    const customerAudioDriveId = await uploadAudioFile(folderId, customerFileName, customerAudioFile);

    return {empAudioDriveId, customerAudioDriveId};
}

const createFolder = async (callId) => {
    try{
        const folderMetaData = {
            name: callId,
            mimeType: "application/vnd.google-apps.folder",
            parents: [DRIVE_FOLDER_ID]
        };

        const folder = await driveService.files.create({
            resource: folderMetaData,
            fields: "id"
        });

        console.log(`${callId} folder ID : `,folder.data.id);
        return folder.data.id;
    } catch (error) {
        console.log("Error creating folder");
    }
}

const uploadAudioFile = async (folderId, fileName, audioFile) => {
    let file;
    const audioMetaData = {
        name: fileName,
        parents: [folderId]        
    };

    const fileBuffer = Buffer.from(audioFile);
    const audioStream = new Readable();
    audioStream.push(fileBuffer);
    audioStream.push(null);
    
    const audio = {
        mimeType: "audio/wav",
        body: audioStream
    };

    try {
        file = await driveService.files.create({
            resource: audioMetaData,
            media : audio,
            fields: "id"
        });
        console.log(`${fileName} successfully in Drive. File ID : ${file.data.id}`);
        return file.data.id;
    } catch (error) {
        console.log("Error uploading audio : ",error.message);
    }
}

export default uploadAudioToDrive;