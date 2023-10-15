import React from 'react';
import './Dashboard.css'; 
import CallsTable from './../../components/charts and tables/CallsTable.js';
import EmpChart from '../../components/charts and tables/EmpBar.js';
import PieChart from './../../components/charts and tables/PieChart';
import data1 from './../../pages/dashboard/CallsTableData.json';
import data2 from './../../pages/dashboard/PieChartData.json'
import data3 from './../../pages/dashboard/EmpBarData.json'

const Dashboard = () =>{

  return(
    
    <div className="dashboard">

      <div className="container">

      </div>

      <div class="pie-container">
        <div class="pie">
          <PieChart data={data2}/>
        </div>
        <div class="pie-info">

        </div>
      </div>

      <div className="container stat-container">
        <div className="top-stat">
          hello
        </div>
        <div className="bottom-stat">
          hello
        </div>
      </div>

      <div className="big-container">
        <EmpChart data={data3}/>
      </div>

    </div>

  )

}

export default Dashboard;
