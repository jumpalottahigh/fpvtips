import React from 'react'
import styled from 'styled-components'
import PaperCard from '../UI/PaperCard'
import mapLegendData from '../../data/mapLegendData'
import Grid from '../UI/Grid'

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
  margin-top: 2rem;
  cursor: pointer;

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
    width: 32px;
    height: 32px;
    margin-right: 1rem;
  }

  .legend-label {
    width: 80%;
    font-size: 16px;
    line-height: 32px;
    text-align: left;
  }

  @media (min-width: 1000px) {
    .legend-label {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 16px;
    }
  }
`

export default class MapLegend extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showLegend: true,
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
        <h3>Legend:</h3>
        <Grid style={{ width: '100%' }}>
          {this.state.showLegend &&
            mapLegendData.map((item, index) => (
              <div className="legend-content" key={index}>
                <img className="legend-symbol" src={item.symbol} />
                <span className="legend-label">{item.label}</span>
              </div>
            ))}
        </Grid>
      </StyledPaperCard>
    )
  }
}
