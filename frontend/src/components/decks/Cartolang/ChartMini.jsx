import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ChartMini = ({data}) => {
    // Sample data
    const percentage = data*100;
    return (
      <div style={{ maxWidth: 35, height: 35}}>
    <CircularProgressbar  value={percentage} 
                          text={`${percentage}%`}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            textSize: "1.5em",
                            pathColor: "#f44336",
                          })}
                           />
      </div>
    );

}

export default ChartMini