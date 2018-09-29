import React from 'react'
import styled from 'styled-components'
import PaperCard from '../UI/PaperCard'

const StyledPaperCard = styled(PaperCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  position: absolute;
  left: -78px;
  top: 32px;
  z-index: 99999;

  h5 {
    font-size: 0.7rem;
    line-height: 1rem;
    margin: 0;
  }

  span {
    font-size: 1rem;
  }
`

export default class MarkerInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { features, label } = this.props
    return (
      <StyledPaperCard>
        <h5>{label}</h5>
        {features && <span>{features}</span>}
      </StyledPaperCard>
    )
  }
}
