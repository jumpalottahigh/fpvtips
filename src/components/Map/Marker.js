import React from 'react'
import MarkerInfo from './MarkerInfo'

const Marker = ({ $hover, label, description, videoLinks }) => {
  const clearHoverStyle = { transform: 'none' }
  const hoverStyle = {
    transform: 'scale(1.3)',
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
        <MarkerInfo
          label={label}
          description={description}
          videoLinks={videoLinks}
        />
      )}
    </div>
  )
}

export default Marker
