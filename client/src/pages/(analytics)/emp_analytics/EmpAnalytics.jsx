import React, { useEffect, useState } from 'react'
import './EmpAnalytics.css';
import styles from "./product.module.css";
import SearchIcon from "assets/search.png";
import LineChart from 'components/charts and tables/LineChart';

// import Cards from 'components/cards/Cards.jsx';
import ManyEmployees from 'components/employeeFetch/ManyEmployees';
import { calculateEmpPerformance } from 'utils/graphData';
import performance from "utils/performance.json"

const EmployeeAnalytics = () => {
  const [graphData, setGraphData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const graph = calculateEmpPerformance("banana",performance);
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
      {/*-------------------- EMPLOYEE DETAILS ------------------ */}
      </div>
      <div className="flex-container">
        <div className='new'>
          <ManyEmployees />
        </div>

        {/*-------------------- EMPLOYEE ANALYTICS ------------------ */}
        <div className='new'>
          <h2>Graphs</h2>
          <LineChart data = {graphData}/>
        </div>
      </div>
    </div>
  )
}

export default EmployeeAnalytics;