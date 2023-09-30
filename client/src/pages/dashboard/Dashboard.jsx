import React from 'react';
import styles from './dashboard.module.css'; 
import CallsTable from './../../components/charts and tables/CallsTable.js';
import EmpChart from '../../components/charts and tables/EmpBar.js';
import PieChart from './../../components/charts and tables/PieChart';
import data1 from './../../pages/dashboard/CallsTableData.json';
import data2 from './../../pages/dashboard/PieChartData.json'
import data3 from './../../pages/dashboard/EmpBarData.json'


const Dashboard = () => {
  return (
    <div className={styles.App}>
      
      <div className={`${styles.panel} ${styles.panel1}`}>
        <CallsTable data={data1}/>
      </div>
      <div className={`${styles.panel} ${styles.panel2}`}>
        <div className={styles.heading}>Customer Calls Sentiment</div>
        <PieChart data={data2}/>
      </div>
      <div className={`${styles.panel} ${styles.panel3}`}>
      <div className={styles.heading}>Employee Performance</div>
        <EmpChart data={data3}/>
      </div>
      <div className={`${styles.panel} ${styles.panel4}`}>
        <CallsTable data={data1}/>
      </div>
      <div className={`${styles.panel} ${styles.panel5}`}>
        <div className={styles.heading}>Product Sentiment</div>
        <PieChart data={data2}/>
      </div>
      <div className={`${styles.panel} ${styles.panel6}`}>
      <div className={styles.heading}>Employee Performance</div>
        <EmpChart data={data3}/>
      </div>
    </div>
  );
}

export default Dashboard;
