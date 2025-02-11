import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const SimpleBarChart = ({ dataset, w, h }) => {
  dataset.sort((a,b) => b.popularity_as_float-a.popularity_as_float)
  let pop = dataset.map(item => { return item.popularity_as_float });
  let spk = dataset.map(item => { return 1.0 - item.popularity_as_float });
  let lbl = dataset.map(item => { return item.country_name_fr });

  const uData = spk; // [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = pop; // [2400, 1398, 800, 3908, 4800, 3800, 4300];
  const xLabels = lbl;
  const hgt = xLabels.length;
  /*
  const xLabels = [
      'Page A',
      'Page B',
      'Page C',
      'Page D',
      'Page E',
      'Page F',
      'Page G',
  ];
  */
  return (
    <>
      <BarChart
        width={w}
        height={h}
        series={[
          { data: pData, label: 'parlé (proportion)', id: 'pvId', stack: 'pop', color: '#F44336' },
        ]}
        yAxis={[{
          data: xLabels, scaleType: 'band', 
        }]}
        xAxis={[{
          colorMap: {
            type: 'piecewise',
            thresholds: [0.2, 0.5, 0.7],
            colors: ['#dbd7c0', '#afac99', '#838173','#57564c',],
          }
        }]}
        layout="horizontal"
        leftAxis={{
          disableTicks: true,
          tickLabelStyle: {
            fontSize: 10,
          },
        }}
        margin={{ top: 10, bottom: 30, left: 100, right: 10 }}
        sx={{
          '& .MuiBarLabel-root': {
            fontSize: '10px',
          },
        }}
      />
    </>
  )
}

export default SimpleBarChart