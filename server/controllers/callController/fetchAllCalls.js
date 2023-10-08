import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../configs/firestoreConfig.js";


const fetchAllCalls = async () => {
    const callCollectionRef = collection(firestoreDB, "callData");

    try {
        const docs = await getDocs(callCollectionRef);
        let calls = [] ;
        docs.forEach((doc)=> {
            const call = doc.data();
            delete call.audioDriveId;
            calls.push(call);
        })
        console.log("All calls fetched successfully");
        return calls;
    }
    catch(error) {
        console.log("Error fething call : ", error.message);
    }
};

export default fetchAllCalls;