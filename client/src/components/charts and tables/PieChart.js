import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";


function PieChart() {
  const data = {
    labels: ['One', 'Two', 'Three'],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ['red', 'green', 'yellow']
      }
    ]
  };

  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: true, // Maintain the aspect ratio
    aspectRatio: 1.7, // Adjust the aspect ratio
  }

  return (
    <div style={{height:'100%', width:'100%', display: 'flex', justifyContent: 'left'}}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
