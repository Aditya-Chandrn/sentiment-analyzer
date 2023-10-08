import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "./configs/firestoreConfig.js";

const editDoc = async () => {
    const empId = "emp.aditya_chandran.20200901.2";
    const prodId = "prod.ac.20210730.0";
    const empRef = doc(firestoreDB, "employeeData", empId);
    const prodRef = doc(firestoreDB, "productData", prodId)

    const empPerformance = [
        {"20230919": 1},
        {"20230920": 2},
        {"20230921": 5},
        {"20230924": 0},
        {"20230925": 4},
        {"20230926": 1},
        {"20230927": 3},
        {"20230928": 5},
        {"20231002": 3},
        {"20231003": 1},
        {"20231004": 4},
        {"20231005": 0},
        {"20231006": 2}
    ]

    const prodPerformance = [
        {"20230918": 0},
        {"20230919": 3},
        {"20230920": 1},
        {"20230922": 4},
        {"20230923": 2},
        {"20230925": 5},
        {"20230926": 3},
        {"20230928": 1},
        {"20230929": 5},
        {"20231004": 0},
        {"20231005": 2},
        {"20231006": 4}
    ]

    await updateDoc(empRef, {performance : empPerformance});
    await updateDoc(prodRef, {performance : prodPerformance});
}

export default editDoc;
    