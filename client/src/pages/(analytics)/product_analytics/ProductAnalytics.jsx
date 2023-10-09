import React, { useEffect, useState } from 'react';
import styles from "./product.module.css";
import SearchIcon from "assets/search.png";
import AllProducts from 'components/productFetch/AllProducts';
import LineChart from 'components/charts and tables/LineChart';
import { calculateProdPerformance } from 'utils/graphData';

import performance from "utils/performance.json"

const ProductAnalytics = () => {
  const [graphData, setGraphData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const graph = calculateProdPerformance("apple",performance);
    setGraphData(graph)
  
  }, []);

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
          <input className={styles.search} type='search' placeholder='Search Employee ...' value={search} onChange={handleChange} />
          <button className={styles.submit} type='submit'>
            <img className={styles.icon} src={SearchIcon} alt='search icon' />
          </button>
        </form>

      {/*-------------------- PRODUCT DETAILS ------------------ */}
      </div>
      <div className="flex-container">
        <div className='new'>
          <AllProducts />
        </div>

        {/*-------------------- PRODUCT ANALYTICS ------------------ */}
        <div className='new'>
          <h2>Performance Graph</h2>
          <LineChart data = {graphData}/>
        </div>
      </div>
    </div>
  )
}

export default ProductAnalytics;