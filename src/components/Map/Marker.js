import React from 'react'

// TODO: Add more props and configurations to marker - icon type, color etc.
const Marker = ({ text }) => (
  <div
  // style={{
  //   color: 'white',
  //   background: 'grey',
  //   padding: '15px 10px',
  //   display: 'inline-flex',
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: '100%',
  //   transform: 'translate(-50%, -50%)',
  // }}
  >
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

export default Marker
