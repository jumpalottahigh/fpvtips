import React from 'react'
import * as contentful from 'contentful-management'
import styled from 'styled-components'
import PaperCard from './PaperCard'
import FAB from './FAB'

import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'

let CONTENTFUL_PERSONAL_TOKEN =
  process.env.GATSBY_CONTENTFUL_PERSONAL_ACCESS_TOKEN
let CONTENTFUL_SPACE = process.env.GATSBY_CONTENTFUL_SPACE_ID
let CONTENTFUL_CONTENT_TYPE_ID = ''
let CONTENTFUL_ENVIRONMENT = 'master'

function sendToContentful({
  title,
  description,
  link,
  author,
  authorSocialLink,
}) {
  // If any of the contentful required variables are missing return
  if (
    !CONTENTFUL_PERSONAL_TOKEN ||
    !CONTENTFUL_SPACE ||
    !CONTENTFUL_CONTENT_TYPE_ID ||
    !CONTENTFUL_ENVIRONMENT
  ) {
    return
  }

  const client = contentful.createClient({
    accessToken: CONTENTFUL_PERSONAL_TOKEN,
  })

  // Create entry
  client
    .getSpace(CONTENTFUL_SPACE)
    .then(space => space.getEnvironment(CONTENTFUL_ENVIRONMENT))
    .then(environment =>
      environment.createEntry(CONTENTFUL_CONTENT_TYPE_ID, {
        fields: {
          title: {
            'en-US': title,
          },
          description: {
            'en-US': description,
          },
          link: {
            'en-US': link,
          },
          author: {
            'en-US': author,
          },
          authorSocialLink: {
            'en-US': authorSocialLink,
          },
        },
      })
    )
    .then(entry => entry.publish())
    .then(entry => console.log(`Entry ${entry.sys.id} published.`))
    .catch(console.error)
}

const modalDimensions = {
  width: '360px',
  height: '580px',
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
      formSubmitted: false,
      form: {
        // modal form fields
        title: '',
        description: '',
        features: [],
        link: '',
        author: '',
        authorSocialLink: '',
      },
    }

    CONTENTFUL_CONTENT_TYPE_ID = props.contentfulType
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
    let { title, description, link, author, authorSocialLink } = this.state.form

    // Basic form validation
    if (title == '' || description == '') return

    let data = {
      title,
      description,
      link,
      author,
      authorSocialLink,
    }

    // If submiting a new tool, we need the score field as well
    if (this.props.contentfulType == 'toolItem') {
      data.score = 0
    }

    // Send data to Contentful
    sendToContentful(data)

    // Clear form and state and close modal
    this.setState(
      {
        open: false,
        formSubmitted: true,
        form: {
          title: '',
          description: '',
          link: '',
          author: '',
          authorSocialLink,
        },
      },
      () => {
        self.setTimeout(() => {
          this.setState({ formSubmitted: false })
        }, 3000)
      }
    )
  }

  render() {
    // Get strings from props or assign defaults otherwise
    let {
      heading = 'Submit a new item:',
      title = 'Title',
      description = 'Description',
      link = 'Wiki link',
      author = 'Your name',
      authorSocialLink = 'Your social link',
      submit = 'Submit',
    } = this.props

    return (
      <React.Fragment>
        {/* Submit an entry FAB */}
        <FAB onClick={this.handleOpen} />

        {/* Status snackbar */}
        {this.state.formSubmitted && (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.formSubmitted}
            autoHideDuration={3000}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={
              <span id="message-id">
                Submitted! Your entry will be up in a few minutes!
              </span>
            }
          />
        )}

        <StyledModal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <PaperCard style={{ width: '100%' }}>
            <form
              name={this.props.name}
              autoComplete="off"
              noValidate
              onSubmit={this.handleFormSubmit}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h4 style={{ textAlign: 'center', marginBottom: 0 }}>
                {heading}
              </h4>
              <TextField
                required
                id="title"
                label={title}
                value={this.state.form.title}
                onChange={this.handleChange('title')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="description"
                label={description}
                multiline
                rows="2"
                rowsMax="4"
                value={this.state.form.description}
                onChange={this.handleChange('description')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="link"
                label={link}
                value={this.state.form.link}
                onChange={this.handleChange('link')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="author"
                label={author}
                value={this.state.form.author}
                onChange={this.handleChange('author')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="authorSocialLink"
                label={authorSocialLink}
                value={this.state.form.authorSocialLink}
                onChange={this.handleChange('authorSocialLink')}
                margin="normal"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: '1rem' }}
              >
                {submit}
              </Button>
            </form>
          </PaperCard>
        </StyledModal>
      </React.Fragment>
    )
  }
}
