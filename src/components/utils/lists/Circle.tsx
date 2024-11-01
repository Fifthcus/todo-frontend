import React, { useState } from 'react'

interface CircleProps {
  task: any,
  completeTask: (id: number, taskCompletionStatus: boolean) => void,
}

const Circle = ({task, completeTask}: CircleProps): JSX.Element => {
    const [isCompleted, setIsCompleted] = useState<boolean>(task.isCompleted);
    const color = "#907AD6";
    const radius = 12.5;
    const handleClick = (status: boolean) => {
      if(status){
        setIsCompleted(status);
        completeTask(task.id, status);
      }
      if(!status){
        setIsCompleted(status);
        completeTask(task.id, status);
      }
    }
    return(
      <>
        {isCompleted ? 
          <svg className="cursor-pointer" onClick={() => handleClick(false)} width={radius * 2} height={radius * 2}>
            <circle 
              cx={radius} 
              cy={radius} 
              r={10} 
              stroke={color}
              strokeWidth={2}
              fill={color} 
            />
          </svg> :
          <svg className="cursor-pointer" onClick={() => handleClick(true)} width={radius * 2} height={radius * 2}>
            <circle 
              cx={radius} 
              cy={radius} 
              r={10} 
              stroke={color}
              strokeWidth={2}
              fill={"none"} 
            />
          </svg>
        }
      </>);
}

export default Circle
