import { collection, doc, getDoc, getDocs, setDoc, where } from "firebase/firestore";
import bucket from "../../configs/fireStorageConfig.js";
import { firestore } from "../../configs/firestoreConfig.js";

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

    const docs = await getDocs(collection(firestore, "callData"), where("empId","==",empId));
    let result = id;
    result = docs.forEach((doc)=> {
        const data = doc.data();
        const current_time = createdDate + createdTime;
        const stored_time = data.createdDate + data.createdTime;
        if (stored_time===current_time) {
            console.log("Employee can't be in more than 1 call at a time");
            return false;
        }
    });
    console.log(result);
    return result;
}

const createCall = async (callFile, empId, prodId, createdDate, createdTime) => {
    const id = await checkProceed(empId, prodId, createdTime, createdDate);
    if(!id){
        console.log("------ CHECKS FAILED -------");
        return;
    }
    console.log("------ CHECKS PASSED -------")

    const callBuffer = Buffer.from(callFile);
    const folderName = "callAudio";
    const fileName = `${folderName}/${id}.audio`;

    const file = bucket.file(fileName);

    const writeStream = file.createWriteStream({
        metadata: {
            contentType: "audio/wav"
        }
    })

    writeStream.on('error', (error => {
        console.error("Error uploading : ", error.message);
    }))

    writeStream.on('finish', async () => {
        const newCall = { callId: id, empId, prodId, createdDate, createdTime, audio: fileName };
        await setDoc(doc(firestore, "callData", id), newCall);

        console.log("File uploaded succesfully.");
    })
    writeStream.end(callBuffer);
}

export default createCall;