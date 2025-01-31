import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const SimpleBarChart = ({ dataset }) => {
    let pop = dataset.map (item => {return item.popularity_as_float});
    let spk = dataset.map (item => {return Number(item.speakers)});
    let lbl = dataset.map (item => {return item.country_name_fr});
    console.log(pop);

    const uData = pop; // [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = pop; // [2400, 1398, 800, 3908, 4800, 3800, 4300];
    const xLabels = lbl;
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
                width={400}
                height={300}
                series={[
                    { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                    { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                ]}
                yAxis={[{ data: xLabels, scaleType: 'band' }]}
                layout="horizontal"
            />
        </>
    )
}

export default SimpleBarChart