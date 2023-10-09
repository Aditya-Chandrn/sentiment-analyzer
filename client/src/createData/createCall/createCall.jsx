import React, { useState } from 'react';
import styles from "./createCall.module.css";
import axios from 'axios';

const makeDate = () => {
    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    const year = today.getFullYear();
    
    if(date<10) date="0"+date;
    if(month<10) month="0"+month;
    
    const fullDate = year+month+date;
    return fullDate;
}

const makeTime = () => {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const fullTime = hours*60*60 + minutes*60 + seconds;
    return fullTime;
}


const CreateCall = () => {
    const [empAudioFile, setEmpAudioFile] = useState(null);
    const [customerAudioFile, setCustomerAudioFile] = useState(null);
    const [empId, setEmpId] = useState();
    const [prodId, setProdId] = useState();
    const [createdTime, setCreatedTime] = useState(makeTime);
    const [createdDate, setCreatedDate] = useState(makeDate);

    const changeTime= (e) => {
        e.preventDefault();
        let [newDate, newTime] = e.target.value.split("T");

        setCreatedDate(newDate);
        setCreatedTime(newTime);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(createdDate, createdTime);

        if(!empAudioFile || !customerAudioFile){
            alert("Select a file");
            return;
        }

        const formData = new FormData();
        formData.append("empAudioFile",empAudioFile);
        formData.append("customerAudioFile",customerAudioFile);
        formData.append("empId",empId);
        formData.append("prodId",prodId);
        formData.append("createdDate",createdDate);
        formData.append("createdTime",createdTime);

        console.log(formData);

        const url = "http://localhost:5000/api/call/create";

        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        })
        .then(response => alert(response.data))
        .catch(error => console.log(error.message));

    }

    return (
        <form className={styles.upload} onSubmit={handleSubmit}>
            Employee<input type='file' name="empAudioFile" onChange={e => setEmpAudioFile(e.target.files[0])}/>
            Customer <input type='file' name="customerAudioFile" onChange={e => setCustomerAudioFile(e.target.files[0])}/>
            Emp ID<input type='text' name="empId" onChange={e => setEmpId(e.target.value)}/>
            Prod ID <input type='text' name="prodId" onChange={e => setProdId(e.target.value)}/>
            Date Time
            <input type='datetime-local' name="createdAt" step="1" onChange={e => changeTime(e)}/>
            <button type='submit'>Upload</button>
        </form>
    )
}

export default CreateCall;