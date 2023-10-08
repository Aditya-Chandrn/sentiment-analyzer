import { arrayUnion, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { firestoreDB } from "../configs/firestoreConfig.js";

const evaluatePerformance = async (callData) => {
    console.log(callData);
    return; 
    const { callId, empId, prodId, createdDate, performance, blackListedWords } = callData;

    const size = Object.keys(performance).length;
    let sum = 0;
    for (const key in performance) sum += performance[key];
    const avg = sum / size;

    const callRef = doc(firestoreDB, "callData", callId);
    const empRef = doc(firestoreDB, "employeeData", empId);
    const prodRef = doc(firestoreDB, "productData", prodId)

    const newPerformance = { [createdDate]: avg }

    const empUpdatedPerformance = {
        "performance": arrayUnion(newPerformance, blackListedWords)
    }
    const prodUpdatedPerformance = {
        "performance": arrayUnion(newPerformance)
    }

    await updateDoc(callRef, { performance });
    await updateDoc(empRef, { performance: empUpdatedPerformance })
    await updateDoc(prodRef, { performance: prodUpdatedPerformance })

    console.log("Performance updated successfully.");
}

export default evaluatePerformance;