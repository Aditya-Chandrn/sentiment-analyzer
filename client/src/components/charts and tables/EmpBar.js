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
import { ResponsiveLine } from '@nivo/line';

const lineData = [
    { "2023-10-15": 8 },
    { "2023-10-14": 9 }
]
const EmpChart = ({ data }) => {
    const red = "hsl(4, 82%, 56%)";
    const orange = "hsl(27, 87%, 49%)";
    const yellow = "hsl(53, 87%, 49%)";
    const grey = "hsl(191, 0%, 74%)";
    const blue = "hsl(191, 100%, 50%)";
    const green = "hsl(105, 74%, 49%)";
  
    const colors = [red, orange, yellow, grey, blue, green];
  
    const barData = [
      {
        date: "2023-10-12",
        "Disgusted": 1,
        "Angry": 0,
        "Unsatisfied": 3,
        "Neutral": 4,
        "Satisfied": 1,
        "Happy": 0
      },
      {
        date: "2023-10-13",
        "Disgusted": 0,
        "Angry": 0,
        "Unsatisfied": 0,
        "Neutral": 0,
        "Satisfied": 0,
        "Happy": 0
      },
      {
        date: "2023-10-14",
        "Disgusted": 0,
        "Angry": 0,
        "Unsatisfied": 0,
        "Neutral": 0,
        "Satisfied": 0,
        "Happy": 0
      },
      {
        date: "2023-10-15",
        "Disgusted": 0,
        "Angry": 1,
        "Unsatisfied": 2,
        "Neutral": 0,
        "Satisfied": 4,
        "Happy": 1
      },
    ];
  
    const layers = [
      "grid",
      "axes",
      "bars",
      "markers",
      "legends",
      NoDataLayer
    ];
  
    return (
      <ResponsiveBar
        data={barData}
        keys={[
          "Disgusted",
          "Angry",
          "Unsatisfied",
          "Neutral",
          "Satisfied",
          "Happy"
        ]}
        indexBy="date"
        margin={{ top: 35, right: 100, bottom: 75, left: 60 }}
        padding={0.3}
        layout="vertical"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={colors}
        layers={layers}
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
        borderWidth={1}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Date',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Number of Calls',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={2}
        labelSkipHeight={22}
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
        ariaLabel="Call Count Data"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in date: " + e.indexValue}
        />
    );
}

const NoDataLayer = ({ bars }) => {
    return bars.map((bar) => {
        const isNoData = Object.values(bar.data).every((value) => value === 0);

        if (isNoData) {
            return (
                <text
                    key={bar.key}
                    x={bar.x + bar.width / 2}
                    y={bar.y + bar.height / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="gray"
                    fontSize={12}
                >
                    NO DATA
                </text>
            );
        }
        return null;
    });
};

export default EmpChart;
