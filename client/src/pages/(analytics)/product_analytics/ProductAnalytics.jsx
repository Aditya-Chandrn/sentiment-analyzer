import React, { useEffect, useState } from 'react';
import styles from "./product.module.css";
import SearchIcon from "assets/search.png";
import axios from 'axios';

const ProductAnalytics = () => {
  const [search, setSearch] = useState("");
  const [callRecords, setCallRecords] = useState([]);

  useEffect(() => {
    async function fetchCallRecords() {
      try {
        const response = await axios.get('http://localhost:5000/api/callRecords');
        const calls = response.data.files.map((call) => call.split("callRecords/"));
        setCallRecords(calls);
      } catch (error) {
        console.error('Error fetching call records:', error);
      }
    }

    fetchCallRecords();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.product}>
      <form method='POST' onSubmit={handleSubmit} className={styles.searchBar}>
        <input className={styles.search} type='search' placeholder='Search product ...' value={search} onChange={handleChange}/>
        <button className={styles.submit} type='submit'>
          <img className={styles.icon} src={SearchIcon} alt='search icon'/>
        </button>
      </form>
      <div className={styles.result}>
        {callRecords.map( (record,index) => 
          <li key={index}>{record}</li>
        )}
      </div>
    </div>
  )
}

export default ProductAnalytics;