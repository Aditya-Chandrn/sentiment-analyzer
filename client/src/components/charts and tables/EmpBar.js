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
        "date": "2023-10-15",
        "Disgusted": 1,
        "Angry": 0,
        "Unsatisfied": 0,
        "Neutral": 2,
        "Satisfied": 1,
        "Happy": 0
      },
      {
        "date": "2023-11-31",
        "Disgusted": 0,
        "Angry": 1,
        "Unsatisfied": 2,
        "Neutral": 0,
        "Satisfied": 2,
        "Happy": 1
      },
      {
        "date": "2023-10-30",
        "Disgusted": 2,
        "Angry": 0,
        "Unsatisfied": 1,
        "Neutral": 1,
        "Satisfied": 0,
        "Happy": 2
      },
      {
        "date": "2023-10-29",
        "Disgusted": 1,
        "Angry": 2,
        "Unsatisfied": 0,
        "Neutral": 1,
        "Satisfied": 1,
        "Happy": 0
      },
      {
        "date": "2023-10-28",
        "Disgusted": 0,
        "Angry": 1,
        "Unsatisfied": 2,
        "Neutral": 0,
        "Satisfied": 2,
        "Happy": 0
      },
      {
        "date": "2023-10-27",
        "Disgusted": 0,
        "Angry": 0,
        "Unsatisfied": 1,
        "Neutral": 2,
        "Satisfied": 1,
        "Happy": 2
      },
      {
        "date": "2023-10-26",
        "Disgusted": 2,
        "Angry": 1,
        "Unsatisfied": 0,
        "Neutral": 1,
        "Satisfied": 0,
        "Happy": 1
      },
      {
        "date": "2023-10-25",
        "Disgusted": 1,
        "Angry": 0,
        "Unsatisfied": 2,
        "Neutral": 0,
        "Satisfied": 1,
        "Happy": 2
      }
      // {
      //   "date": "2023-10-19",
      //   "Disgusted": 2,
      //   "Angry": 1,
      //   "Unsatisfied": 3,
      //   "Neutral": 2,
      //   "Satisfied": 5,
      //   "Happy": 1
      // },
      // {
      //   "date": "2023-10-20",
      //   "Disgusted": 0,
      //   "Angry": 1,
      //   "Unsatisfied": 3,
      //   "Neutral": 2,
      //   "Satisfied": 3,
      //   "Happy": 4
      // },
      // {
      //   "date": "2023-10-21",
      //   "Disgusted": 0,
      //   "Angry": 2,
      //   "Unsatisfied": 1,
      //   "Neutral": 3,
      //   "Satisfied": 4,
      //   "Happy": 3
      // },
      // {
      //   "date": "2023-10-22",
      //   "Disgusted": 1,
      //   "Angry": 1,
      //   "Unsatisfied": 3,
      //   "Neutral": 1,
      //   "Satisfied": 4,
      //   "Happy": 7
      // },
      // {
      //   "date": "2023-10-23",
      //   "Disgusted": 1,
      //   "Angry": 2,
      //   "Unsatisfied": 2,
      //   "Neutral": 2,
      //   "Satisfied": 3,
      //   "Happy": 1
      // },
      // {
      //   "date": "2023-10-24",
      //   "Disgusted": 1,
      //   "Angry": 0,
      //   "Unsatisfied": 2,
      //   "Neutral": 3,
      //   "Satisfied": 5,
      //   "Happy": 1
      // },
      //   {
      //     "date": "2023-10-30",
      //     "Disgusted": 1,
      //     "Angry": 1,
      //     "Unsatisfied": 2,
      //     "Neutral": 4,
      //     "Satisfied": 3,
      //     "Happy": 2
      //   },
      //   {
      //     "date": "2023-10-31",
      //     "Disgusted": 2,
      //     "Angry": 0,
      //     "Unsatisfied": 3,
      //     "Neutral": 3,
      //     "Satisfied": 3,
      //     "Happy": 1
      //   },
      //   {
      //     "date": "2023-11-01",
      //     "Disgusted": 0,
      //     "Angry": 2,
      //     "Unsatisfied": 1,
      //     "Neutral": 5,
      //     "Satisfied": 3,
      //     "Happy": 1
      //   },
      //   {
      //     "date": "2023-11-02",
      //     "Disgusted": 1,
      //     "Angry": 1,
      //     "Unsatisfied": 3,
      //     "Neutral": 2,
      //     "Satisfied": 4,
      //     "Happy": 1
      //   },
      //   {
      //     "date": "2023-11-03",
      //     "Disgusted": 2,
      //     "Angry": 0,
      //     "Unsatisfied": 1,
      //     "Neutral": 4,
      //     "Satisfied": 2,
      //     "Happy": 3
      //   }
    ];
  
    const layers = [
      "grid",
      "axes",
      "bars",
      "markers",
      "legends",
      NoDataLayer
    ];

    const lineDataTransformed = [
      {
          id: 'calls',
          data: barData.map(item => ({
              x: item.date,
              y: Object.values(item).reduce((a, b) => a + b, 0)
          }))
      }
    ];
  
    return (
      <>
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
        margin={{ top: 55, right: 100, bottom: 50, left: 60 }}
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
            translateX: 400,
            translateY: -45,
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
      
      <ResponsiveLine
    data={lineDataTransformed}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
    curve="monotoneX"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Date',
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    yFormat=" >-.2f"
    axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Number of Calls',
        legendOffset: -40,
        legendPosition: 'middle'
    }}
    colors={{ scheme: 'nivo' }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
      />
      </>
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