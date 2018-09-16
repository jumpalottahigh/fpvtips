import React from 'react'

// TODO: Add more props and configurations to marker - icon type, color etc.
const Marker = ({ text, $hover }) => {
  const greatPlaceStyle = { transform: 'none' }
  const greatPlaceStyleHover = { transform: 'scale(2)' }
  const style = $hover ? greatPlaceStyleHover : greatPlaceStyle

  return (
    <div style={{ width: '52px', height: '52px', ...style }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="52"
        width="52"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="26"
          cy="26"
          r="24"
          stroke="black"
          strokeWidth="2"
          fill="red"
        />
        <text x="8" y="32" fill="#fff" fontSize="14px">
          {text}
        </text>
      </svg>
    </div>
  )
}

export default Marker
