import { doc, setDoc } from "firebase/firestore";
import bucket from "../../configs/fireStorageConfig.js";
import { firestoreDB } from "../../configs/firestoreConfig.js";

const createProduct = (image, prodName, createdAt, prodNo) => {
    const imageBuffer = Buffer.from(image);
    const folderName = "productImage";
    const id = `prod.${prodName}.${createdAt}.${prodNo}`.toLowerCase();
    const fileName = `${folderName}/${id}.image`;

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
        const newProduct = {id, prodName, createdAt, prodNo, image : fileName};
        await setDoc(doc(firestoreDB, "productData", id), newProduct);

        console.log("File uploaded succesfully.");
    })
    writeStream.end(imageBuffer);
}

export default createProduct;