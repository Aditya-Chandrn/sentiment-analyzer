import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../configs/firestoreConfig.js";


const fetchAllCalls = async () => {
    const callCollectionRef = collection(firestore, "callData");

    try {
        const docs = await getDocs(callCollectionRef);
        let calls = [] ;
        docs.forEach((doc)=> {
            calls.push(doc.data());
        })
        console.log("All calls fetched successfully");
        return calls;
    }
    catch(error) {
        console.log("Error fething call : ", error.message);
    }
};

export default fetchAllCalls;