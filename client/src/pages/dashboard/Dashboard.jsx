import React from 'react';
import './Dashboard.css'; 
import CallsTable from './../../components/charts and tables/CallsTable.js';
import EmpChart from '../../components/charts and tables/EmpBar.js';
import PieChart from './../../components/charts and tables/PieChart';
import data1 from './../../pages/dashboard/CallsTableData.json';
import data2 from './../../pages/dashboard/PieChartData.json'
import data3 from './../../pages/dashboard/EmpBarData.json'

const Dashboard = (props) =>{

  return(
    
    <div class="dashboard">

      <div class="container">

      </div>

      <div class="container pie-container">
        <PieChart data={data2}/>
      </div>

      <div class="container stat-container">
        <div class="top-stat">
          <label class='count'>1760</label>
        </div>
        <div class="bottom-stat">
          hello
        </div>
      </div>

      <div class="big-container">
        <EmpChart data={data3}/>
      </div>

    </div>

  )

}

export default Dashboard;
