import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../configs/firestoreConfig.js";
import bucket from "../../configs/fireStorageConfig.js";


const fetchAllProduct = async () => {
    const collectionRef = collection(firestoreDB, "productData");
    
    try {
        const snapshot = await getDocs(collectionRef);
        let products = [];
    
        const imagePromises = snapshot.docs.map(async (doc) => {
            const productData = doc.data();
            const id = doc.id;
            const image = await getImage(id);
            console.log("prodSuccess");
            return { ...productData, image }; //image  
        });

        // Wait for all image promises to resolve
        products = await Promise.all(imagePromises);
        return products;
    } catch (error) {
        console.error('ERROR:', error.message);
    }    
}

const getImage = async (id) => {
    const folderName = "productImage";
    const imageName = id+".image";
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

export default fetchAllProduct;