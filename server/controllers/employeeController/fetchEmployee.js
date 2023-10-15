import { doc, getDoc } from "firebase/firestore";
import bucket from "../../configs/fireStorageConfig.js";
import { firestoreDB } from "../../configs/firestoreConfig.js";

const fetchEmployee = async (id) => {
    const employeeRef = doc(firestoreDB, "employeeData", id);

    try {
        const doc = await getDoc(employeeRef);
        if(!doc.exists){
            console.log("No such document");
            return;
        }

        let data = doc.data();
        const image = await getImage(id);
        
        data.image = image;
        return { id, data };
    }
    catch(error) {
        console.log("Error fething employee : ", error.message);
    }
};

const getImage = async (id) => {
    const folderName = "employeeImage";
    const imageName = id+".profile";
    const file = bucket.file(`${folderName}/${imageName}`);
    
    try {
        const data = await file.download();
        const imageBuffer = data[0];
        const base64Image = imageBuffer.toString("base64");
        return base64Image;
    }
    catch(error){
        console.log("Error getting image : ", error.message);
    }
}

export default fetchEmployee;

