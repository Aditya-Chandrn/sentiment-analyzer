import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../configs/firestoreConfig.js";
import bucket from "../../configs/fireStorageConfig.js";


const fetchAllProduct = async () => {
    const productRef = collection(firestoreDB, "productData");
    
    console.log("----------- FETCHING ALL PRODUCTS ----------");

    try {
        const productData = await getDocs(productRef);
        let products = [];
    
        products = await Promise.all(productData.docs.map(async (doc) => {
            const product = doc.data();
            const id = doc.id;
            const image = await getImage(id);
            product.image = image;
            return {...product}
        }));

        console.log("Fetched data of all products.");

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