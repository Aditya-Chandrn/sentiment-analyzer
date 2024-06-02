import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import bucket from "../../configs/fireStorageConfig.js";
import { firestoreDB } from "../../configs/firestoreConfig.js";

const createEmployee = async (image, fname, lname, joined, type) => {
    const stateRef = doc(firestoreDB, "stateData", "Available Id");
    const stateData = (await getDoc(stateRef)).data();
    const empId = stateData.employeeId;
    const nextEmpId = "EMP-" + (parseInt(empId.slice(4,), 16)+1).toString(16).padStart(6,"0").toUpperCase();
    await updateDoc(stateRef, {employeeId : nextEmpId});

    const imageBuffer = Buffer.from(image);
    const folderName = "employeeImage";
    
    const fileName = `${folderName}/${empId}.profile`;
    const file = bucket.file(fileName);

    const writeStream = file.createWriteStream({
        metadata: {
            contentType: "image/jpeg" 
        }
    })

    writeStream.on('error', (error => {
        console.error("Error uploading : ",error.message);
    }))

    writeStream.on('finish', async ()=> {
        const newEmployee = {empId, fname, lname, joined, performance: [], type, image : fileName};
        await setDoc(doc(firestoreDB, "employeeData", empId), newEmployee);

        console.log("File uploaded succesfully.");
    })
    writeStream.end(imageBuffer);
}

export default createEmployee;