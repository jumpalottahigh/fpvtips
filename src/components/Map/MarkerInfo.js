import React from 'react'
import styled from 'styled-components'
import FeatureIcons from './FeatureIcons'
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
    const { features, title } = this.props
    return (
      <StyledPaperCard>
        <h5>{title}</h5>
        {features && <FeatureIcons place={features} size="1" />}
      </StyledPaperCard>
    )
  }
}
