import React from 'react';
import styles from './dashboard.module.css'; 
import CallsTable from "components/charts and tables/CallsTable.js";
import EmpChart from 'components/charts and tables/EmpData.js';
import PieChart from 'components/charts and tables/PieChart';

const data = {
  labels: ['Employee 1', 'Employee 2', 'Employee 3'],
  positive: [30, 20, 10],
  negative: [10, 15, 5],
  neutral: [10, 5, 15],
};

const Dashboard = () => {
  return (
    <div className={styles.App}>
      
      <div className={`${styles.panel} ${styles.panel1}`}>
        <CallsTable/>
      </div>
      <div className={`${styles.panel} ${styles.panel2}`}>
        <div className='heading'>Customer Calls Sentiment</div>
        <PieChart/>
      </div>
      <div className={`${styles.panel} ${styles.panel3}`}>
      <div className='heading'>Employee Performance</div>
        <EmpChart data={data}/>
      </div>
      <div className={`${styles.panel} ${styles.panel4}`}>
        <CallsTable/>
      </div>
      <div className={`${styles.panel} ${styles.panel5}`}>
        <div className='heading'>Product Sentiment</div>
        <PieChart/>
      </div>
      <div className={`${styles.panel} ${styles.panel6}`}>
      <div className={styles.heading}>Employee Performance</div>
        <EmpChart data={data}/>
      </div>
    </div>
  );
}

export default Dashboard;
