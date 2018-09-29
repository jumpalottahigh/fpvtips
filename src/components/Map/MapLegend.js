import React from 'react'
import styled from 'styled-components'
import PaperCard from '../UI/PaperCard'

const StyledPaperCard = styled(PaperCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  h4 {
    margin: 0;
    text-decoration: underline;
  }

  .legend-content {
    display: flex;
    width: 100%;
    margin: 0.25rem 0;
  }

  .legend-symbol {
    font-size: 22px;
    width: 20%;
    margin-right: 1rem;
  }

  .legend-label {
    width: 80%;
  }
`

// Emoji legend
// 🌳 - trees
// 🏞️️ - hills / mountains
// 💧 - lake / water / sea
// 🏖️ - beach
// 🛣️ - road / cars
// 🌾 - crops / tall grass
// 🐜 - micro quad
// 🐘 - mini quad

const mapLegendData = [
  {
    symbol: '🌳',
    label: 'trees',
  },
  {
    symbol: '🏞️️',
    label: 'hills / mountains',
  },
  {
    symbol: '💧',
    label: 'lake / sea / river',
  },
  {
    symbol: '🏖️',
    label: 'beach',
  },
  {
    symbol: '🛣️',
    label: 'road / traffic',
  },
  {
    symbol: '🌾',
    label: 'crops / high grass',
  },
  {
    symbol: '🐜',
    label: 'good for micro quads',
  },
  {
    symbol: '🐘',
    label: 'good for mini quads',
  },
]

export default class MapLegend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledPaperCard>
        <h4>Legend:</h4>
        {mapLegendData.map((item, index) => (
          <div className="legend-content" key={index}>
            <span className="legend-symbol">{item.symbol}</span>
            <span className="legend-label">{item.label}</span>
          </div>
        ))}
      </StyledPaperCard>
    )
  }
}
