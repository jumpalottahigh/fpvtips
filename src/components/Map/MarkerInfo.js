import React from 'react'
import PaperCard from '../UI/PaperCard'

export default class MarkerInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { label, description, videoLinks } = this.props
    return (
      <PaperCard>
        <h5>{label}</h5>
        <p>{description}</p>
        {videoLinks.map((video, index) => (
          <div key={index}>
            <a href={video}>{video}</a>
          </div>
        ))}
      </PaperCard>
    )
  }
}
