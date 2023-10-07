import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../configs/firestoreConfig.js";
import bucket from "../../configs/fireStorageConfig.js";


const fetchAllEmployees = async () => {
    const collectionRef = collection(firestore, "employeeData");
    
    try {
        const snapshot = await getDocs(collectionRef);
        let employees = [];
    
        const imagePromises = snapshot.docs.map(async (doc) => {
            const employeeData = doc.data();
            const id = doc.id;
            // const image = await getImage(id);
            return { ...employeeData, id}; //, image
        });

        // Wait for all image promises to resolve
        employees = await Promise.all(imagePromises);
        return employees;
    } catch (error) {
        console.error('ERROR:', error.message);
    }    
}

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

export default fetchAllEmployees;