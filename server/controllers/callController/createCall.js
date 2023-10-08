import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import axios from "axios";

import { firestoreDB } from "../../configs/firestoreConfig.js";
import uploadAudioToDrive from "../../utils/uploadToDrive.js";


const postCallToModel = async (callId, callDataToModel) => {
    callDataToModel.callId = callId;

    try{
        const response = await axios.post("http://127.0.0.1:8000/api/upload", callDataToModel);
        console.log(response.data);
    } catch (error) {
        console.log("Not able to post call to model : ",error.message);
    }
}

const createCall = async (callData) => {
    console.log("received call")

    const {empId, prodId, createdDate, createdTime, empAudioFile, customerAudioFile} = callData;
    const id = await checkProceed(empId, prodId, createdTime, createdDate);
    if(!id){
        console.log("------ CALLS CHECKS FAILED -------");
        return;
    }
    console.log("------ CALLS CHECKS PASSED -------");
    
    await postCallToModel(id, callData);
    
    const {empAudioDriveId, customerAudioDriveId} = await uploadAudioToDrive(id, empAudioFile, customerAudioFile);
    const audioDriveIds = {empAudioDriveId, customerAudioDriveId};
    console.log(audioDriveIds);
    // return;

    try{
        const newCall = { callId: id, empId, prodId, createdDate, createdTime, audioDriveIds};
        await setDoc(doc(firestoreDB, "callData", id), newCall);
        console.log("New call added to database.");
    } catch(error) {
        console.log("Error adding new call to database : ",error.message);
    }
}

const checkExist = async (id, col) => {
    const docRef = doc(firestoreDB, col, id);
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

    const callRef = collection(firestoreDB, "callData");
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

export default createCall;