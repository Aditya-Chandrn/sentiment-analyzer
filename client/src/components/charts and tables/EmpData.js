import React from 'react';
import { Bar } from 'react-chartjs-2';

const EmpChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Positive',
        backgroundColor: 'green',
        data: data.positive,
        categoryPercentage: 0.5, // Adjust the size of the outer bars
        barPercentage: 1.0, // Adjust the size of the inner bars
      },
      {
        label: 'Negative',
        backgroundColor: 'red',
        data: data.negative,
        categoryPercentage: 0.5,
        barPercentage: 1.0,
      },
      {
        label: 'Neutral',
        backgroundColor: 'yellow',
        data: data.neutral,
        categoryPercentage: 0.5,
        barPercentage: 1.0,
      },
    ],
  };

  const chartOptions = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: true, // Maintain the aspect ratio
    aspectRatio: 1.65, // Adjust the aspect ratio
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div style={{height:'90%', width:'90%'}}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default EmpChart;
