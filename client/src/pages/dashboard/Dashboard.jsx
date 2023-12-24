import React from 'react';
import './Dashboard.css'; 
import CallsTable from './../../components/charts and tables/CallsTable.js';
import EmpChart from '../../components/charts and tables/EmpBar.js';
import PieChart from './../../components/charts and tables/PieChart';
import data1 from './../../pages/dashboard/CallsTableData.json';
import data2 from './../../pages/dashboard/PieChartData.json'
import data3 from './../../pages/dashboard/EmpBarData.json'
import GaugeChart from 'components/charts and tables/GaugeChart';

const Dashboard = (props) =>{

  return(
    
    <div className="dashboard">

      <div className="container gauge-container">
        <GaugeChart/>
        <br></br>
        Overall Score
      </div>

      <div class="pie-container">
          <div style={{
                top: '3vh',
                position: 'absolute',
                fontSize: '1.5em',
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'sans-serif'
            }}>
              Customer Satisfaction Distribution
          </div>
          <PieChart data={data2}/>
      </div>

      <div className="container stat-container">
        <div className="top-stat">
          Average Product Rating
          <div style={{
                  paddingTop: '3vh',
                  fontSize: '3em',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  color: '#33ff8a'
              }}>
                2.5 / 5
            </div>
        </div>
        
        <div className="bottom-stat">
          Average Employee Rating
          <div style={{
                  paddingTop: '3vh',
                  fontSize: '3em',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  color: 'yellow'
              }}>
                3.1 / 5
            </div>
        </div>
      </div>

      <div className="big-container">
        <div style={{
                  top: '52vh',
                  left: '15vw',
                  position: 'absolute',
                  fontSize: '1.5em',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontFamily: 'sans-serif'
              }}>
                Calls Distribution Timeline
            </div>
        <EmpChart data={data3}/>
      </div>

    </div>

  )

}

export default Dashboard;
