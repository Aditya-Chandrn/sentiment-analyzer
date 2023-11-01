import React, { useState } from 'react';
import styles from "./product.module.css";
import SearchIcon from "assets/search.png";
import AllProducts from 'components/productFetch/AllProducts';
import LineChart from 'components/charts and tables/LineChart';

const ProductAnalytics = () => {
  const [graphData, setGraphData] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }



  return (
    <div>

      {/*-------------------- SEARCH BAR ------------------ */}
      <div className={styles.product}>
        <form method='POST' onSubmit={handleSubmit} className={styles.searchBar}>
          <input className={styles.search} type='search' placeholder='Search Product ...' value={search} onChange={handleChange} />
          <button className={styles.submit} type='submit'>
            <img className={styles.icon} src={SearchIcon} alt='search icon' />
          </button>
        </form>

      {/*-------------------- PRODUCT DETAILS ------------------ */}
      </div>
      <div className="flex-container">
        <div className='new'>
          <AllProducts setGraphData={setGraphData}/>
        </div>

        {/*-------------------- PRODUCT ANALYTICS ------------------ */}
        <div className='new'>
          <h2>Performance Graph</h2>
          {graphData ? <LineChart data = {graphData}/> : <></>}
        </div>
      </div>
    </div>
  )
}

export default ProductAnalytics;