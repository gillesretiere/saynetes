import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Chart = ({data}) => {
    // Sample data
    const percentage = data*100;
    return (
      <div style={{ width: 75, height: 75 }}>
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

export default Chart