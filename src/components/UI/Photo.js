import React from 'react'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const modalDimensions = {
  width: '360px',
  height: '300px',
}

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  top: calc(50% - ${modalDimensions.height} / 2) !important;
  left: calc(50% - ${modalDimensions.width} / 2) !important;
  height: ${modalDimensions.height};
  width: ${modalDimensions.width};
`

const StyledImage = styled.img`
  cursor: pointer;
  max-width: 100%;
  transition: 500ms all;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`

const StyledModalImage = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: #000;
    background-color: #fafafa;
    position: fixed;
    right: calc(50% - 22px);
    z-index: 9;
  }

  img {
    max-width: 100%;
    transform: scale(1.2);
  }
`

export default class Photo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  // Modal
  handleOpen = () => {
    this.setState({ open: true })
  }

  // Modal
  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { src } = this.props
    const { open } = this.state

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
      <React.Fragment>
        <div>
          <StyledImage
            src={fullUrl.href}
            draggable="false"
            onClick={this.handleOpen}
          />
        </div>

        <StyledModal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <StyledModalImage>
            <IconButton onClick={this.handleClose} aria-label="Close">
              <CloseIcon style={{ fontSize: 32 }} />
            </IconButton>
            <img src={fullUrl.href} draggable="false" />
          </StyledModalImage>
        </StyledModal>
      </React.Fragment>
    )
  }
}
