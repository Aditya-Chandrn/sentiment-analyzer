import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"
import { firestoreDB } from "../configs/firestoreConfig.js";

const evaluatePerformance = async (callData) => {
    let { callId, empId, prodId, createdDate, blackListed } = callData;
    empId = empId.toUpperCase();
    prodId = prodId.toUpperCase();
    let performance = callData.performance;

    const size = Object.keys(performance).length;
    let sum = 0;
    for (const rating of performance) sum += rating;
    const avg = Math.round(sum / size);
    // const avg = 1;

    performance = performance.map((rating) => Math.round(rating))

    const callRef = doc(firestoreDB, "callData", callId);
    await updateDoc(callRef, { performance });
    
    addEmpPerformance(empId, createdDate, blackListed, avg);
    addProdPerformance(prodId, createdDate, avg);

    console.log("Performance updated successfully.");
    return;
}

//------------------- ADD EMPLOYEE PERFORMANCE --------------------

const addEmpPerformance = async (empId, createdDate, blackListed, avg) => {
    const empRef = doc(firestoreDB, "employeeData", empId);
    const empData = (await getDoc(empRef)).data();

    let existingIndex = -1;
    if(empData.hasOwnProperty("performance")){
        existingIndex = empData.performance.findIndex((pf) => {
            const docDate = Object.keys(pf)[0];
            return docDate === createdDate
        });
    }

    if (existingIndex===-1) {
        const newPerformance = {
            [createdDate]: {
                averageRating: avg,
                blackListed,
                callCount: 1
            }
        };
        await updateDoc(empRef, { performance: arrayUnion(...[newPerformance]) })
        return;
    }

    const existingPerformance = empData.performance[existingIndex][createdDate];
    const existingAverage = existingPerformance.averageRating;
    const existingBlackListed = existingPerformance.blackListed;
    const existingCount = existingPerformance.callCount;

    const newAverage = (existingAverage * existingCount + avg) / (existingCount + 1);
    const newBlackListed = blackListed.concat(existingBlackListed);

    const newPerformance = {
        [createdDate]: {
            averageRating: newAverage,
            blackListed: newBlackListed,
            callCount: existingCount + 1
        }
    };

    empData.performance[existingIndex] = newPerformance
    await updateDoc(empRef, { performance: empData.performance })
}

//------------------- ADD PRODUCT PERFORMANCE --------------------

const addProdPerformance = async (prodId, createdDate, avg) => {
    const prodRef = doc(firestoreDB, "productData", prodId)
    const prodData = (await getDoc(prodRef)).data();

    let existingIndex = -1;
    if(prodData.hasOwnProperty("performance")){
        existingIndex = prodData.performance.findIndex((pf) => {
            const docDate = Object.keys(pf)[0];
            return docDate === createdDate
        });
    }

    if (existingIndex===-1) {
        const newPerformance = {
            [createdDate]: {
                averageRating: avg,
                callCount: 1
            }
        };
        await updateDoc(prodRef, { performance: arrayUnion(...[newPerformance]) })
        return;
    }

    const existingPerformance = prodData.performance[existingIndex][createdDate];
    const existingAverage = existingPerformance.averageRating;
    const existingCount = existingPerformance.callCount;

    const newAverage = (existingAverage * existingCount + avg) / (existingCount + 1);

    const newPerformance = {
        [createdDate]: {
            averageRating: newAverage,
            callCount: existingCount + 1
        }
    };

    prodData.performance[existingIndex] = newPerformance
    await updateDoc(prodRef, { performance: prodData.performance })
}

export default evaluatePerformance;