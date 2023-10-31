import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDB } from "../../configs/firestoreConfig.js";
import bucket from "../../configs/fireStorageConfig.js";


const fetchAllEmployees = async () => {
    const employeeRef = collection(firestoreDB, "employeeData");
    const employeeQuery = query(employeeRef, where("type","==",0));
    
    console.log("----------- FETCHING ALL EMPLOYEES ----------");

    try {
        const employeeData = await getDocs(employeeQuery);
        let employees = [];
    
        employees = await Promise.all(employeeData.docs.map(async (doc) => {
            const employee = doc.data();
            const id = doc.id;
            const image = await getImage(id);
            employee.image = image;
            return {...employee}
        }));

        console.log("Fetched data of all employees.");
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