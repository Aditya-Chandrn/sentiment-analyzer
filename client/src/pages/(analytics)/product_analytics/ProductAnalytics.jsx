import React, { useEffect, useState } from 'react';
import styles from "./product.module.css";
import SearchIcon from "assets/search.png";
import axios from 'axios';
import Cards from 'components/cards/Cards_p';
import LineChart from 'components/charts and tables/LineChart';

const ProductAnalytics = () => {
  const [search, setSearch] = useState("");
  const [callRecords, setCallRecords] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [openCard1, setOpenCard1] = useState(false);
  const [openCard2, setOpenCard2] = useState(false);
  const [openCard3, setOpenCard3] = useState(false);
  const [openCard4, setOpenCard4] = useState(false);

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


// CARD FUNCTIONING ----------------------------------------------------------------------------
const onClick = () => {
  setOpenCard(!openCard);
  !openCard ? setOpenCard1(false): setOpenCard1(openCard1) ;
  !openCard ? setOpenCard2(false): setOpenCard2(openCard2) ;
  !openCard ? setOpenCard3(false): setOpenCard3(openCard3) ;
  !openCard ? setOpenCard4(false): setOpenCard4(openCard4) ;
}
const onClick1 = () => {
  setOpenCard1(!openCard1)
  !openCard1 ? setOpenCard(false): setOpenCard(openCard) ;
  !openCard1 ? setOpenCard2(false): setOpenCard2(openCard2) ;
  !openCard1 ? setOpenCard3(false): setOpenCard3(openCard3) ;
  !openCard1 ? setOpenCard4(false): setOpenCard4(openCard4) ;
}
const onClick2 = () => {
  setOpenCard2(!openCard2)
  !openCard2 ? setOpenCard(false): setOpenCard(openCard) ;
  !openCard2 ? setOpenCard1(false): setOpenCard1(openCard1) ;
  !openCard2 ? setOpenCard3(false): setOpenCard3(openCard3) ;
  !openCard2 ? setOpenCard4(false): setOpenCard4(openCard4) ;
}
const onClick3 = () => {
  setOpenCard3(!openCard3)
  !openCard3 ? setOpenCard(false): setOpenCard(openCard) ;
  !openCard3 ? setOpenCard1(false): setOpenCard1(openCard1) ;
  !openCard3 ? setOpenCard2(false): setOpenCard2(openCard2) ;
  !openCard3 ? setOpenCard4(false): setOpenCard4(openCard4) ;
}
const onClick4 = () => {
  setOpenCard4(!openCard4)
  !openCard4 ? setOpenCard(false): setOpenCard(openCard) ;
  !openCard4 ? setOpenCard1(false): setOpenCard1(openCard1) ;
  !openCard4 ? setOpenCard2(false): setOpenCard2(openCard3) ;
  !openCard4 ? setOpenCard3(false): setOpenCard3(openCard3) ;
}

return (
  <div>

{/* SEARCH BAR */}
    <div className={styles.product}>
    <form method='POST' onSubmit={handleSubmit} className={styles.searchBar}>
      <input className={styles.search} type='search' placeholder='Search Employee ...' value={search} onChange={handleChange}/>
      <button className={styles.submit} type='submit'>
        <img className={styles.icon} src={SearchIcon} alt='search icon'/>
      </button>
    </form>
    <div className={styles.result}>
      {callRecords.map( (record,index) => 
        <li key={index}>{record}</li>
      )}
    </div>

{/* Employee Details */}
  </div>
    <div class="flex-container">
      <div class='new'>
        <div onClick={onClick}><Cards openCard={openCard} /></div>
        <div onClick={onClick1}><Cards openCard={openCard1} /></div>
        <div onClick={onClick2}><Cards openCard={openCard2} /></div>
        <div onClick={onClick3}><Cards openCard={openCard3} /></div>
        <div onClick={onClick4}><Cards openCard={openCard4} /></div>
      </div>

{/* Employee Analytics */}
      <div class='new'>
        <h2>Performance Graph</h2>
        <LineChart/>
      </div>
    </div>
  </div>
)
}

export default ProductAnalytics;