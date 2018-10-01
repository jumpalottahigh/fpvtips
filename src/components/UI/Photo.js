import React from 'react'
import styled from 'styled-components'

// TODO: style the photos

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
      <div>
        <img src={fullUrl.href} />
      </div>
    )
  }
}
