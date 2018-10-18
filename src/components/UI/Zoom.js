// Adapted from: https://subtle-ui.netlify.com/click-and-hold-to-zoom/
import React from 'react'

export default class Zoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { zoom: 0.8 }
  }

  startZoom = () => {
    this.setState({ zoom: 1.5 })
  }

  endZoom = () => {
    this.setState({ zoom: 0.8 })
  }

  render() {
    const zoomStyles = {
      cursor: 'zoom-in',
      WebkitUserSelect: 'none',
      WebkitTouchCallout: 'none',
      transition: '1s all',
      transform: `scale(${this.state.zoom})`,
    }

    return (
      <div style={{ padding: '1em' }}>
        <div
          style={zoomStyles}
          onTouchStart={this.startZoom}
          onTouchEnd={this.endZoom}
          onTouchCancel={this.endZoom}
          onMouseDown={this.startZoom}
          onMouseUp={this.endZoom}
          onMouseOut={this.endZoom}
          onPointerDown={this.startZoom}
          onPointerUp={this.endZoom}
          onPointerCancel={this.endZoom}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
