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

    performance = performance.map((rating) => Math.round(rating))

    const callRef = doc(firestoreDB, "callData", callId);
    await updateDoc(callRef, { performance, averageRating: avg });

    incrementCallCount(createdDate, avg);
    
    addEmpPerformance(empId, createdDate, blackListed, avg);
    addProdPerformance(prodId, createdDate, avg);

    console.log("Performance updated successfully.");
    return;
}

const incrementCallCount = async (createdDate, avg) => {
    const stateRef = doc(firestoreDB, "stateData", "callCounts");
    const callCountData = (await getDoc(stateRef)).data();

    if(!callCountData.hasOwnProperty(createdDate)){
        let callRatingCount = new Array(6).fill(0);
        callRatingCount[avg] += 1;
        await updateDoc(stateRef, {
            [createdDate] : {
                callCount: 1, 
                callRatingCount : callRatingCount
            }
        });
        return;
    }

    let callRatingCount = callCountData[createdDate]["callRatingCount"];
    callRatingCount[avg] += 1;
    const newCallCount = callCountData[createdDate]["callCount"] + 1;
    await updateDoc(stateRef, {
        [createdDate]: {
            callCount: newCallCount,
            callRatingCount: callRatingCount
        }
    })
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

    let newAverage = (existingAverage * existingCount + avg) / (existingCount + 1);
    newAverage = newAverage.toFixed(1);
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

    let newAverage = (existingAverage * existingCount + avg) / (existingCount + 1);
    newAverage = newAverage.toFixed(1);

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