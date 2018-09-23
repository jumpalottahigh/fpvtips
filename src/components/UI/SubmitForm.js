import React from 'react'
import styled from 'styled-components'
import PaperCard from './PaperCard'
import FAB from './FAB'

import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

import fire from '../../utils/firebase'

const modalDimensions = {
  width: '360px',
  height: '440px',
}

const StyledModal = styled(Modal)`
  display: flex;
  top: calc(50% - ${modalDimensions.height} / 2) !important;
  left: calc(50% - ${modalDimensions.width} / 2) !important;
  height: ${modalDimensions.height};
  width: ${modalDimensions.width};
`

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false, // modal open state
      form: {
        // modal form fields
        title: '',
        description: '',
        link: '',
        author: '',
      },
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

  // Modal form updates
  handleChange = name => event => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: event.target.value,
      },
    })
  }

  // Modal form submit
  handleFormSubmit = e => {
    e.preventDefault()

    // Extract and set data
    let { title, description, link, author } = this.state.form

    // Basic form validation
    if (title == '' || description == '') return

    let data = {
      title,
      description,
      link,
      author,
    }

    // Send data to Firebase
    fire
      .database()
      .ref(this.props.fireNode)
      .push(data)

    // Clear form and state and close modal
    this.setState({
      open: false,
      form: {
        title: '',
        description: '',
        link: '',
        author: '',
      },
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* Submit an entry FAB */}
        <FAB onClick={this.handleOpen} />
        <StyledModal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <PaperCard style={{ width: '100%' }}>
            <form
              autoComplete="off"
              noValidate
              onSubmit={this.handleFormSubmit}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h4 style={{ textAlign: 'center', marginBottom: 0 }}>
                Submit a new item:
              </h4>
              <TextField
                required
                id="title"
                label="Title"
                value={this.state.form.title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
              <TextField
                required
                id="description"
                label="Description"
                multiline
                rowsMax="4"
                value={this.state.form.description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
              <TextField
                id="link"
                label="YouTube/Wiki link"
                value={this.state.form.link}
                onChange={this.handleChange('link')}
                margin="normal"
              />
              <TextField
                id="author"
                label="Name"
                value={this.state.form.author}
                onChange={this.handleChange('author')}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: '1rem' }}
              >
                Submit
              </Button>
            </form>
          </PaperCard>
        </StyledModal>
      </React.Fragment>
    )
  }
}