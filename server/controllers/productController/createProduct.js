import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import bucket from "../../configs/fireStorageConfig.js";
import { firestoreDB } from "../../configs/firestoreConfig.js";

const createProduct = async (image, prodName, createdAt, prodNo) => {
    const stateRef = doc(firestoreDB, "stateData", "Available Id");
    const stateData = (await getDoc(stateRef)).data();
    const prodId = stateData.productId;
    const nextProdId = "PROD-" + (parseInt(prodId.slice(5,), 16)+1).toString(16).padStart(2,"0").toUpperCase();
    await updateDoc(stateRef, {productId : nextProdId});

    const imageBuffer = Buffer.from(image);
    const folderName = "productImage";
    const fileName = `${folderName}/${prodId}.image`;

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
        const newProduct = {prodId, prodName, createdAt, prodNo, image : fileName};
        await setDoc(doc(firestoreDB, "productData", prodId), newProduct);

        console.log("File uploaded succesfully.");
    })
    writeStream.end(imageBuffer);
}

export default createProduct;