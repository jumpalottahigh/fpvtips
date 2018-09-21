import React from 'react'

const Marker = ({ $hover, label, description, videoLinks }) => {
  const clearHoverStyle = { transform: 'none' }
  const hoverStyle = {
    transform: 'scale(2)',
    transition: '275ms ease-out',
  }
  const style = $hover ? hoverStyle : clearHoverStyle

  return (
    <div style={{ width: '52px', height: '52px', ...style }}>
      {!$hover ? (
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
            fill="#0375d8"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="52"
          width="102"
          preserveAspectRatio="xMidYMid"
        >
          <rect
            width="50"
            height="100"
            style={{
              fill: 'rgb(0,0,255)',
              strokeWidth: 1,
              stroke: 'rgb(0,0,0)',
            }}
          />
          <text x="8" y="32" fill="#fff" fontSize="14px">
            {label}
          </text>
          <text x="0" y="42" fill="#fff" fontSize="14px">
            {description}
          </text>
          {videoLinks.map((video, index) => (
            <text key={index} x="0" y="52" fill="#fff" fontSize="14px">
              {video}
            </text>
          ))}
        </svg>
      )}
    </div>
  )
}

export default Marker
