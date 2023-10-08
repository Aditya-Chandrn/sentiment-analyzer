import {arrayUnion, collection, doc, getDoc, updateDoc} from "firebase/firestore"
import {firestoreDB} from "../configs/firestoreConfig.js";

const evaluatePerformance = async (callData) => {
    const {callId, empId, prodId, createdDate, performance} = callData;
    
    const size = Object.keys(performance).length;
    let sum = 0;
    for(const key in performance) sum+=performance[key];
    const avg = sum/size;
    
    const callRef = doc(firestoreDB, "callData", callId);
    const empRef = doc(firestoreDB, "employeeData", empId);
    const prodRef = doc(firestoreDB, "productData", prodId)

    const newPerformance = {[createdDate] : avg}
    
    const updatedPerformance = {
        "performance" : arrayUnion(newPerformance)
    }

    await updateDoc(callRef, {performance});
    await updateDoc(empRef, updatedPerformance)
    await updateDoc(prodRef, updatedPerformance)

    console.log("Performance updated successfully.");
}

export default evaluatePerformance;