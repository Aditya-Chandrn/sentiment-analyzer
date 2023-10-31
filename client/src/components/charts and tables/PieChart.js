import React from 'react';
import { ResponsivePie } from '@nivo/pie'

const PieChart = ({ data }) => {

    const total = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <>
            <ResponsivePie
                data={data}
                margin={{ top: 60, right: 50, bottom: 40, left: 50 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
                colors={[
                    'hsl(4, 82%, 56%)',
                    'hsl(27, 87%, 49%)',
                    'hsl(53, 87%, 49%)',
                    'hsl(191, 0%, 74%)',
                    'hsl(191, 100%, 50%)',
                    'hsl(105, 74%, 49%)'
                ]}
                transitionMode='innerRadius'
                animate={true}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'column',
                        justify: false,
                        translateX: 167,
                        translateY: 30,
                        itemsSpacing: 5,
                        itemWidth: 70,
                        itemHeight: 10,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
            <div style={{
                fontFamily: 'sans-serif',
                position: 'absolute',
                top: '27vh',
                left: '47.56vw',
                transform: 'translate(-50%, -50%)',
                fontSize: '1.5em',
                fontWeight: 'bold',
                color: '#333'
            }}>
                {total}
            </div>
        </>
    );
}

export default PieChart;

// import React from 'react';
// import { ResponsivePie } from '@nivo/pie'

// const PieChart = ({data}) => {
//     Calculate the total value
//     const total = data.reduce((acc, item) => acc + item.value, 0);

//     return (
//         <div style={{ position: 'relative', height: '500px' }}>
//             <ResponsivePie
//             data={data}
//             margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//             innerRadius={0.5}
//             padAngle={0.7}
//             cornerRadius={3}
//             activeOuterRadiusOffset={8}
//             borderWidth={1}
//             borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.6 ] ] }}
//             arcLinkLabelsSkipAngle={10}
//             arcLinkLabelsTextColor="#333333"
//             arcLinkLabelsThickness={2}
//             arcLinkLabelsColor={{ from: 'color' }}
//             arcLabelsSkipAngle={10}
//             arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
//             colors={[
//                 'hsl(4, 82%, 56%)',
//                 'hsl(27, 87%, 49%)',
//                 'hsl(53, 87%, 49%)',
//                 'hsl(191, 0%, 74%)',
//                 'hsl(191, 100%, 50%)',
//                 'hsl(105, 74%, 49%)'
//             ]}
//             transitionMode='innerRadius'
//             animate={true}
//             legends={[
//                 {
//                     anchor: 'bottom',
//                     direction: 'row',
//                     justify: false,
//                     translateX: 50,
//                     translateY: 56,
//                     itemsSpacing: 1,
//                     itemWidth: 79,
//                     itemHeight: 10,
//                     itemTextColor: '#999',
//                     itemDirection: 'left-to-right',
//                     itemOpacity: 1,
//                     symbolSize: 12,
//                     symbolShape: 'circle',
//                     effects: [
//                         {
//                             on: 'hover',
//                             style: {
//                                 itemTextColor: '#000'
//                             }
//                         }
//                     ]
//                 }
//             ]}
//         />
//             <div style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 fontSize: '1.5em',
//                 fontWeight: 'bold',
//                 color: '#333'
//             }}>
//                 {total}
//             </div>
//         </div>
//     );
// }

// export default PieChart;
