import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.div`
  background-color: #000;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding-bottom: 56.25%;
  height: 0;

  &:hover .play-button {
    background-color: red;
  }
`
const PlayButton = styled.div`
  position: absolute;
  width: 75px;
  height: 50px;
  background-color: rgba(51, 51, 51, 0.85);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  opacity: 0.8;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  &:before {
    position: absolute;
    content: '';
    border-style: solid;
    border-width: 12px 0 12px 20px;
    border-color: transparent transparent transparent #fff;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`

const Img = styled.img`
  position: absolute;
  width: 100%;
  top: -16.84%;
  left: 0;
  opacity: 0.7;
`

const VideoIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default class Video extends Component {
  state = {
    loadIframe: false,
  }

  handleVideoClick = () => {
    this.setState(prevState => {
      return { loadIframe: !prevState.loadIframe }
    })
  }

  render() {
    const { src, width, height, title } = this.props
    const isBrowser = typeof window !== 'undefined'

    if (!src || !isBrowser) return null

    const fullUrl = new URL(src)
    let videoId = fullUrl.search.split('v=')[1]

    if (!videoId) return null

    let ampersandPosition = videoId.indexOf('&')

    if (ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition)
    }

    return (
      <VideoWrapper onClick={this.handleVideoClick} className="video-wrapper">
        {!this.state.loadIframe ? (
          <Fragment>
            <Img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
            />
            <PlayButton className="play-button" />
          </Fragment>
        ) : (
          <VideoIFrame
            src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1&origin=https://www.fpvtips.com`}
            allowFullScreen
            allow="autoplay"
            frameBorder="0"
            width={width}
            height={height}
            title={title}
          />
        )}
      </VideoWrapper>
    )
  }
}
