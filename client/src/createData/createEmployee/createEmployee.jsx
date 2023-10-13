import React, { useState } from 'react';
import styles from "./createEmployee.module.css";
import axios from 'axios';

const makeDate = () => {
    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    const year = today.getFullYear();
    
    if(date<10) date="0"+date;
    if(month<10) month="0"+month;
    
    const fullDate = `${year}-${month}-${date}`;
    return fullDate;
}


const CreateEmployee = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [type, setType] = useState(0);
    const [joined, setJoined] = useState(makeDate);

    const changeDate = (e) => {
        e.preventDefault();
        setJoined(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!selectedFile){
            alert("Select a file");
            return;
        }

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
            Image <input type='file' name="image" onChange={e => setSelectedFile(e.target.files[0])}/>
            First Name <input type='text' name="fname" onChange={e => setFname(e.target.value)}/>
            Last Name <input type='text' name="lname" onChange={e => setLname(e.target.value)}/>
            Type <select type='dropdown' name="type" onChange={e => setType(e.target.value)}>
                <option value={0} selected>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
            Joined on <input type='date' name="joined" onChange={e => changeDate(e)}/>
            <button type='submit'>Upload</button>
        </form>
    )
}

export default CreateEmployee;