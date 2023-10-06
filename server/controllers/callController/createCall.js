import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { config } from "dotenv";
import { Readable } from "stream";

import { firestore } from "../../configs/firestoreConfig.js";
import { driveService } from "../../configs/googleDriveConfig.js";



const checkExist = async (id, col) => {
    const docRef = doc(firestore, col, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return true;
    return false;
}

const checkProceed = async (empId, prodId, createdTime, createdDate)=> {
    const isEmployee = await checkExist(empId, "employeeData");
    if (!isEmployee) {
        console.log(`Employee with ID ${empId} doesn't exist.`);
        return;
    }

    const isProduct = await checkExist(prodId, "productData");
    if (!isProduct) {
        console.log(`Product with ID ${prodId} doesn't exist.`);
        return;
    }

    const id = `call.${empId}.${prodId}.${createdDate}.${createdTime}`.toLowerCase();
    const isCall = await checkExist(id, "callData");
    if (isCall) {
        console.log(`Call with ID ${id} already exists.`);
        return;
    }

    const callRef = collection(firestore, "callData");
    const callQuery = query(callRef, where("empId", "==", empId));

    const docs = await getDocs(callQuery);
    const current_time = createdDate + createdTime;

    let result = id;
    docs.forEach((doc)=> {
        const data = doc.data();
        const stored_time = data.createdDate + data.createdTime;
        if (stored_time===current_time) {
            console.log("Employee can't be in more than 1 call at a time");
            result=false;
        }
    });
    return result;
}

config();
const DRIVE_FOLDER_ID = process.env.DRIVE_FOLDER_ID;

const uploadCallAudio = async (fileName, callFile) => {
    let file;
    const audioMetaData = {
        name: fileName,
        parents: [DRIVE_FOLDER_ID]        
    };

    const fileBuffer = Buffer.from(callFile);
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
        console.log("Audio uploaded successfully in Drive. File ID : ", file.data);
        return file.data.id;
    } catch (error) {
        console.log("Error uploading audio : ",error.message);
    }
}

const createCall = async (callFile, empId, prodId, createdDate, createdTime) => {
    const id = await checkProceed(empId, prodId, createdTime, createdDate);
    if(!id){
        console.log("------ CALLS CHECKS FAILED -------");
        return;
    }
    console.log("------ CALLS CHECKS PASSED -------");

    const fileName = `${id}.audio`;
    const audioDriveId = await uploadCallAudio(fileName, callFile);
    console.log(audioDriveId);

    try{
        const newCall = { callId: id, empId, prodId, createdDate, createdTime, audioDriveId: audioDriveId };
        await setDoc(doc(firestore, "callData", id), newCall);
        console.log("New call added to database.");
    } catch(error) {
        console.log("Error adding new call to database : ",error.message);
    }
}

export default createCall;




 //------------ FIREBASE STORAGE FILE UPLOAD CODE -------------
    
    // const callBuffer = Buffer.from(callFile);
    // const folderName = "callAudio";
    // const fileName = `${folderName}/${id}.audio`;

    // const file = bucket.file(fileName);

    // console.log("Uploading File");
    // const writeStream = file.createWriteStream({
    //     metadata: {
    //         contentType: "audio/wav"
    //     }
    // })

    // writeStream.on('error', (error => {
    //     console.error("Error uploading : ", error.message);
    // }))

    // writeStream.on('finish', async () => {
    // writeStream.end(callBuffer);