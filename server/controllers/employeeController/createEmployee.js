import { doc, setDoc } from "firebase/firestore";
import bucket from "../../configs/fireStorageConfig.js";
import { firestore } from "../../configs/firestoreConfig.js";

const createEmployee = (image, fname, lname, joined, type) => {
    const imageBuffer = Buffer.from(image);
    const folderName = "employeeImage";
    const id = `emp.${fname}_${lname}.${joined}.${type}`.toLowerCase();
    const fileName = `${folderName}/${id}.profile`;

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
        const newEmployee = {id, fname, lname, joined, type, image : fileName};
        await setDoc(doc(firestore, "employeeData", id), newEmployee);

        console.log("File uploaded succesfully.");
    })
    writeStream.end(imageBuffer);
}

export default createEmployee;