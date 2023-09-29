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


const CreateEmployee = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [type, setType] = useState();
    const [joined, setJoined] = useState(makeDate);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!selectedFile){
            alert("Select a file");
            return;
        }

        const newJoined = joined.split("-").join("");
        setJoined(newJoined);


        const formData = new FormData();
        formData.append("fname",fname);
        formData.append("lname",lname);
        formData.append("joined",joined);
        formData.append("type",type);
        formData.append('image',selectedFile);

        console.log(formData);

        const url = "http://localhost:5000/api/employee/create";

        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message));

    }

    return (
        <form className={styles.upload} onSubmit={handleSubmit}>
            <input type='file' name="image" onChange={e => setSelectedFile(e.target.files[0])}/>
            <input type='text' name="fname" onChange={e => setFname(e.target.value)}/>
            <input type='text' name="lname" onChange={e => setLname(e.target.value)}/>
            <select type='dropdown' name="type" onChange={e => setType(e.target.value)}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
            <input type='date' name="joined" onChange={e => setJoined(e.target.value)}/>
            <button type='submit'>Upload</button>
        </form>
    )
}

export default CreateEmployee;