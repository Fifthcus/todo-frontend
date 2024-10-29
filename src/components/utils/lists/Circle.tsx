import React, { useState } from 'react'

const Circle = (): JSX.Element => {
    const [circleFilled, setCircleFilled] = useState(false);
    const color = "#907AD6";
    const radius = 12.5;
    const handleClick = () => {
      if(circleFilled){
        setCircleFilled(false);
      }
      if(!circleFilled){
        setCircleFilled(true);
      }
    }
    return(
      <>
      {circleFilled ? 
        <svg className="cursor-pointer" onClick={handleClick} width={radius * 2} height={radius * 2}>
          <circle 
            cx={radius} 
            cy={radius} 
            r={10} 
            stroke={color}
            strokeWidth={2}
            fill={color} 
          />
        </svg>:
        <svg className="cursor-pointer" onClick={handleClick} width={radius * 2} height={radius * 2}>
          <circle 
            cx={radius} 
            cy={radius} 
            r={10} 
            stroke={color}
            strokeWidth={2}
            fill={"none"} 
          />
        </svg>}
      </>)
}

export default Circle

/*<svg onClick={handleClick} width={radius * 2} height={radius * 2}>
      <circle 
        cx={radius} 
        cy={radius} 
        r={10} 
        stroke={color}
        strokeWidth={2}
        fill={fill} 
      />
    </svg>*/
