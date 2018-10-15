import React from 'react'
import styled from 'styled-components'
import PaperCard from '../UI/PaperCard'
import mapLegendData from '../../data/mapLegendData'

// Emoji legend
// 🌳 - trees
// 🏞️️ - hills / mountains
// 💧 - lake / water / sea
// 🏖️ - beach
// 🛣️ - road / cars
// 🌾 - crops / tall grass
// 🐜 - micro quad
// 🐘 - mini quad

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

export default class MapLegend extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showLegend: false,
    }
  }

  handleToggleLegend = () => {
    this.setState({
      showLegend: !this.state.showLegend,
    })
  }

  render() {
    return (
      <StyledPaperCard onClick={this.handleToggleLegend}>
        <h4>Legend:</h4>
        {this.state.showLegend &&
          mapLegendData.map((item, index) => (
            <div className="legend-content" key={index}>
              <span className="legend-symbol">{item.symbol}</span>
              <span className="legend-label">{item.label}</span>
            </div>
          ))}
      </StyledPaperCard>
    )
  }
}
