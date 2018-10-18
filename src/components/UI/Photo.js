import React from 'react'
import styled from 'styled-components'
import Zoom from './Zoom'

const StyledImage = styled.img`
  transition: 1s all;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`

export default class Photo extends React.Component {
  render() {
    const { src } = this.props

    if (!src) return null

    // Strip any query params
    let fullUrl = new URL(src)
    fullUrl.search = ''

    // Make sure url ends with a trailing slash
    if (!fullUrl.href.endsWith('/')) {
      fullUrl.href += '/'
    }

    // Add the dev api part to the URL
    /* INFO:
    /media/?size=t - thumbnail
    /media/?size=m - medium (default)
    /media/?size=l - large
    */
    fullUrl.href += 'media'

    return (
      <Zoom>
        <StyledImage src={fullUrl.href} draggable="false" />
      </Zoom>
    )
  }
}
