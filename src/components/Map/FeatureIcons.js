import React from 'react'
import mapLegendData from '../../data/mapLegendData'

export default class FeatureIcons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { place, size = 2 } = this.props

    if(!place) return null

    return (
      <span>
        {mapLegendData
          .filter(item => {
            if (place.includes(item.value)) {
              return item
            }
          })
          .map((item, index) => (
            <img
              key={index}
              src={item.symbol}
              style={{ height: `${size}rem` }}
              alt={item.label}
            />
          ))}
      </span>
    )
  }
}
