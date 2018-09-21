import React from 'react'

const Marker = ({ $hover, label, description, videoLinks }) => {
  const clearHoverStyle = { transform: 'none' }
  const hoverStyle = { transform: 'scale(2)', zIndex: 9 }
  const style = $hover ? hoverStyle : clearHoverStyle

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
          {label}
        </text>
        {/* TODO:
        description and video will only show on hover / click? */}
        <text x="0" y="42" fill="#fff" fontSize="14px">
          {description}
        </text>
        {videoLinks.map((video, index) => (
          <text key={index} x="0" y="52" fill="#fff" fontSize="14px">
            {video}
          </text>
        ))}
      </svg>
    </div>
  )
}

export default Marker
