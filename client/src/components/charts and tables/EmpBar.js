// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const EmpChart = ({ data }) => {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Positive',
//         backgroundColor: 'green',
//         data: data.positive,
//         categoryPercentage: 0.5, // Adjust the size of the outer bars
//         barPercentage: 1.0, // Adjust the size of the inner bars
//       },
//       {
//         label: 'Negative',
//         backgroundColor: 'red',
//         data: data.negative,
//         categoryPercentage: 0.5,
//         barPercentage: 1.0,
//       },
//       {
//         label: 'Neutral',
//         backgroundColor: 'yellow',
//         data: data.neutral,
//         categoryPercentage: 0.5,
//         barPercentage: 1.0,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true, // Make the chart responsive
//     maintainAspectRatio: true, // Maintain the aspect ratio
//     aspectRatio: 1.65, // Adjust the aspect ratio
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//       },
//     },
//   };

//   return (
//     <div style={{height:'90%', width:'90%'}}>
//       <Bar data={chartData} options={chartOptions} />
//     </div>
//   );
// };


import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

const EmpChart = ({data}) => {

    return (
      <ResponsiveBar
        data={data}
        keys={[
            'Positive',
            'Neutral',
            'Negative'
        ]}
        indexBy="empid"
        margin={{ top: 35, right: 100, bottom: 75, left: 60 }}
        padding={0.3}
        layout="vertical"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['green','yellow','red']}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Positive'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Negative'
                },
                id: 'lines'
            }
        ]}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Calls',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Employee No.',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.6'
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -25,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: -5,
                symbolSize: 20,
                itemDirection: 'left-to-right'
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in empid: "+e.indexValue}
    />
    );
  }

export default EmpChart;
