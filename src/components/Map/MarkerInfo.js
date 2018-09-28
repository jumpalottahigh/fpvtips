import React from 'react'
import styled from 'styled-components'
import PaperCard from '../UI/PaperCard'
import VideoIcon from '@material-ui/icons/Subscriptions'

const StyledPaperCard = styled(PaperCard)`
  display: flex;
  justify-content: ${props => (props.videoLinks ? 'space-between' : 'center')};
  align-items: center;
  padding: 0.5rem;

  position: absolute;
  left: -78px;
  top: 32px;
  z-index: 99999;

  h4 {
    font-size: 0.8rem;
    line-height: 2rem;
    margin: 0;
  }
`

// Emoji legend
// 🌳 - trees
// 🏞️️ - hills / mountains
// 💧 - lake / water / sea
// 🏖️ - beach
// 🌾 - crops / tall grass
// 🐜 - micro quad
// 🐘 - mini quad

export default class MarkerInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { features, label, videoLinks } = this.props
    return (
      <StyledPaperCard>
        <h4>{label}</h4>
        {videoLinks && (
          <span>
            <VideoIcon />
          </span>
        )}
      </StyledPaperCard>
    )
  }
}
