import { firestore } from "../configs/firestoreConfig.js";
import {addDoc, collection, doc, getDoc, getDocs, setDoc} from 'firebase/firestore';

const collectionRef = collection(firestore, "employeeData");

const fname= "Priya";
const lname= "Sharma";
const joined = "20210725";
const type = 2;
const id = `${fname}_${lname}.${joined}.${type}`.toLowerCase();

const newEmployee = {
  fname, lname, joined, type
}

//ADD DATA
// await setDoc(doc(firestore, "employeeData", id), newEmployee)

//FETCH ONE DATA
// const docRef = doc(firestore, "employeeData", id);
// getDoc(docRef).
//   then((doc) => {
//     console.log(doc.data(), doc.id);
//   })


// FETCH MULTIPLE DATA
const showData = () => getDocs(collectionRef)
  .then((snapshot) => {
    let employees = [];
    snapshot.docs.forEach((doc) => {
      employees.push({
        ...doc.data(), 
        id: doc.id});
    })
    console.log(employees);
  })
  .catch(error => {
    console.log('ERROR : ',error.message);
  });

export {showData};