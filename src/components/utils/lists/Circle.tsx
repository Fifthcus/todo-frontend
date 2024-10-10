import React from 'react'

const Circle = () => {
    const color = "#907AD6";
    const radius = 12.5;
  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle 
        cx={radius} 
        cy={radius} 
        r={radius} 
        fill={color} 
      />
    </svg>
  )
}

export default Circle
