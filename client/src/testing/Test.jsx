import React, { useState } from 'react';
import styles from "./test.module.css";
import axios from 'axios';

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!selectedFile){
            alert("Select a file");
            return;
        }

        const formData = new FormData();
        formData.append('image',selectedFile);

        const url = "http://localhost:5000/api/upload";

        axios.post(url, formData, {
            withCredentials: true
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message));

    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files);
    }

    return (
        <form className={styles.upload} onSubmit={handleSubmit}>
            <input type='file' name="image" onChange={handleFileChange}/>
            <button type='submit'>Upload</button>
        </form>
    )
}

export default Upload