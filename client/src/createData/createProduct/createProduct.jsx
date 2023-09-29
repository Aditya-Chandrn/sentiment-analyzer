import React, { useState } from 'react';
import styles from "./createProduct.module.css";
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


const CreateProduct = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prodName, setFname] = useState();
    const [prodNo, setProdNo] = useState();
    const [createdAt, setCreatedAt] = useState(makeDate);

    const changeDate = (e) => {
        e.preventDefault();
        const newCreatedAt = e.target.value.split("-").join("");
        setCreatedAt(newCreatedAt);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!selectedFile){
            alert("Select a file");
            return;
        }   

        const formData = new FormData();
        formData.append("prodName",prodName);
        formData.append("createdAt",createdAt);
        formData.append("prodNo",prodNo);
        formData.append('image',selectedFile);

        console.log(formData);

        const url = "http://localhost:5000/api/product/create";

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
            <input type='text' name="prodName" onChange={e => setFname(e.target.value)}/>
            <select type='dropdown' name="prodNo" onChange={e => setProdNo(e.target.value)}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
            <input type='date' name="createdAt" onChange={e => changeDate(e)}/>
            <button type='submit'>Upload</button>
        </form>
    )
}

export default CreateProduct;