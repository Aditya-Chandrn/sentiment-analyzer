import { doc, getDoc } from "firebase/firestore";
import bucket from "../../configs/fireStorageConfig.js";
import { firestore } from "../../configs/firestoreConfig.js";

const fetchProduct = async (id) => {
    const productRef = doc(firestore, "productData", id);

    try {
        const doc = await getDoc(productRef);
        if(!doc.exists){
            console.log("No such document");
            return;
        }

        let data = doc.data();
        const image = await getImage(id);
        
        data.image = image;
        return data;
    }
    catch(error) {
        console.log("Error fething product : ", error.message);
    }
};

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

export default fetchProduct;

