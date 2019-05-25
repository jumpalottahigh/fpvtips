import React from 'react'
import * as contentful from 'contentful-management'
import styled from 'styled-components'
import PaperCard from './PaperCard'
import FAB from './FAB'

import { FaInstagram, FaYoutube } from 'react-icons/fa'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import Snackbar from '@material-ui/core/Snackbar'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import AddBox from '@material-ui/icons/AddBox'
import Clear from '@material-ui/icons/Clear'
import FormControl from '@material-ui/core/FormControl'

import mapLegendData from '../../data/mapLegendData'

let CONTENTFUL_PERSONAL_TOKEN =
  process.env.GATSBY_CONTENTFUL_PERSONAL_ACCESS_TOKEN
let CONTENTFUL_SPACE = process.env.GATSBY_CONTENTFUL_SPACE_ID
let CONTENTFUL_CONTENT_TYPE_ID = ''
let CONTENTFUL_ENVIRONMENT = 'master'

function sendToContentful({
  title,
  description,
  features,
  instagramLinks,
  youtubeLinks,
  author,
  authorSocialLink,
  lat,
  lng,
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
          features: {
            'en-US': features,
          },
          photoLinks: {
            'en-US': instagramLinks,
          },
          videoLinks: {
            'en-US': youtubeLinks,
          },
          author: {
            'en-US': author,
          },
          authorSocialLink: {
            'en-US': authorSocialLink,
          },
          lat: {
            'en-US': lat,
          },
          lng: {
            'en-US': lng,
          },
        },
      })
    )
    .then(entry => entry.publish())
    .then(entry => console.log(`Entry ${entry.sys.id} published.`))
    .catch(console.error)
}

const INSTAGRAM_LINK_REGEX = /(https?:\/\/www\.)?instagram\.com(\/p\/\w+\/?)/
const YOUTUBE_LINK_REGEX = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/

const modalDimensions = {
  width: '360px',
  height: '720px',
}

const modalDimensions700 = {
  width: '450px',
  height: '720px',
}

const modalDimensions900 = {
  width: '560px',
  height: '720px',
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
}

const StyledModal = styled(Modal)`
  display: flex;
  top: calc(50% - ${modalDimensions.height} / 2) !important;
  left: calc(50% - ${modalDimensions.width} / 2) !important;
  height: ${modalDimensions.height};
  width: ${modalDimensions.width};

  @media (min-width: 700px) {
    top: calc(50% - ${modalDimensions700.height} / 2) !important;
    left: calc(50% - ${modalDimensions700.width} / 2) !important;
    width: ${modalDimensions700.width};
    height: ${modalDimensions700.height};
  }

  @media (min-width: 900px) {
    top: calc(50% - ${modalDimensions900.height} / 2) !important;
    left: calc(50% - ${modalDimensions900.width} / 2) !important;
    width: ${modalDimensions900.width};
    height: ${modalDimensions900.height};
  }
`

const IconLabel = styled.div`
  display: flex;

  .icon {
    margin-right: 0.5rem;
  }

  .text {
  }
`

const UploadedLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  color: forestgreen;

  .uploaded-link__clear {
    font-size: 1.2rem;
    cursor: pointer;
    color: #000;
  }
`

export default class SubmitFormFPVSpot extends React.Component {
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
        currentYoutubeLink: '',
        currentInstagramLink: '',
        instagramLinks: [],
        youtubeLinks: [],
        author: '',
        authorSocialLink: '',
        newMarker: this.props.newMarker || null,
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
    let {
      title,
      description,
      features,
      currentInstagramLink,
      instagramLinks = [],
      currentYoutubeLink,
      youtubeLinks = [],
      author,
      authorSocialLink,
    } = this.state.form

    // Basic form validation
    // Check for required fields
    if (title == '' || description == '') return

    // Get new marker data
    let lat = 0
    let lng = 0

    if (this.state.form.newMarker != null) {
      lat = this.state.form.newMarker.lat
      lng = this.state.form.newMarker.lng
    }

    // Accept only valid links
    if (currentInstagramLink.match(INSTAGRAM_LINK_REGEX)) {
      instagramLinks = [...instagramLinks, currentInstagramLink]
    }

    // Accept only valid links
    if (currentYoutubeLink.match(YOUTUBE_LINK_REGEX)) {
      youtubeLinks = [...youtubeLinks, currentYoutubeLink]
    }

    // Prepare data object
    let data = {
      title,
      description,
      features,
      instagramLinks,
      youtubeLinks,
      author,
      authorSocialLink,
      lat,
      lng,
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
          features: [],
          instagramLinks: [],
          youtubeLinks: [],
          currentInstagramLink: '',
          currentYoutubeLink: '',
          author: '',
          authorSocialLink: '',
          newMarker: {
            lat,
            lng,
          },
        },
      },
      () => {
        self.setTimeout(() => {
          this.setState({ formSubmitted: false })
        }, 3000)
      }
    )
  }

  handleAddMoreInstagramLinks = () => {
    // Extract elements from state
    let { instagramLinks, currentInstagramLink } = this.state.form

    // Accept only valid links
    if (currentInstagramLink.match(INSTAGRAM_LINK_REGEX)) {
      instagramLinks = [...instagramLinks, currentInstagramLink]
    } else {
      currentInstagramLink = ''
    }

    this.setState({
      form: {
        ...this.state.form,
        instagramLinks,
        currentInstagramLink: '',
      },
    })
  }

  handleAddMoreYoutubeLinks = () => {
    // Extract elements from state
    let { youtubeLinks, currentYoutubeLink } = this.state.form

    // Accept only valid links
    if (currentYoutubeLink.match(YOUTUBE_LINK_REGEX)) {
      youtubeLinks = [...youtubeLinks, currentYoutubeLink]
    } else {
      currentYoutubeLink = ''
    }

    this.setState({
      form: {
        ...this.state.form,
        youtubeLinks,
        currentYoutubeLink: '',
      },
    })
  }

  handleRemoveInstagramLink = e => {
    let { instagramLinks } = this.state.form

    // Remove the element with the specific ID
    instagramLinks.splice(e.target.dataset.linkId, 1)

    // Update state
    this.setState({
      form: {
        ...this.state.form,
        instagramLinks,
      },
    })
  }

  handleRemoveYoutubeLink = e => {
    let { youtubeLinks } = this.state.form

    // Remove the element with the specific ID
    youtubeLinks.splice(e.target.dataset.linkId, 1)

    // Update state
    this.setState({
      form: {
        ...this.state.form,
        youtubeLinks,
      },
    })
  }

  render() {
    // Get strings from props or assign defaults otherwise
    let {
      heading = 'Submit a new FPV spot:',
      title = 'Title',
      description = 'Description',
      features = 'Features',
      instagramLinks = 'Instagram photos',
      youtubeLinks = 'YouTube videos',
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
                Saved! Your entry will be up in a few minutes!
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
          <PaperCard style={{ width: '100%', overflow: 'auto' }}>
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
                rowsMax="4"
                value={this.state.form.description}
                onChange={this.handleChange('description')}
                margin="normal"
                variant="outlined"
              />
              {!this.props.noFeaturesInput && (
                <FormControl variant="outlined" margin="normal">
                  <InputLabel htmlFor="select-multiple-checkbox">
                    {features}
                  </InputLabel>
                  <Select
                    multiple
                    value={this.state.form.features}
                    onChange={this.handleChange('features')}
                    input={
                      <OutlinedInput
                        labelWidth={70}
                        id="select-multiple-checkbox"
                      />
                    }
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {mapLegendData.map(({ label, symbol, value }) => (
                      <MenuItem key={symbol} value={value}>
                        <Checkbox
                          color="primary"
                          checked={this.state.form.features.indexOf(value) > -1}
                        />
                        <img
                          src={symbol}
                          alt={label}
                          style={{ height: '1.5rem' }}
                        />
                        <ListItemText primary={label} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              <TextField
                id="instagramLinks"
                label={
                  <IconLabel>
                    <FaInstagram className="icon" />{' '}
                    <span className="text">{instagramLinks}</span>
                  </IconLabel>
                }
                value={this.state.form.currentInstagramLink}
                onChange={this.handleChange('currentInstagramLink')}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Add more items"
                        onClick={this.handleAddMoreInstagramLinks}
                      >
                        <AddBox />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Render list of successfully uploaded instagram links */}
              {this.state.form.instagramLinks.map((link, index) => (
                <UploadedLink key={index}>
                  {link}{' '}
                  <Clear
                    className="uploaded-link__clear"
                    data-link-id={index}
                    onClick={this.handleRemoveInstagramLink}
                  />
                </UploadedLink>
              ))}

              <TextField
                id="youtubeLinks"
                label={
                  <IconLabel>
                    <FaYoutube className="icon" />{' '}
                    <span className="text">{youtubeLinks}</span>
                  </IconLabel>
                }
                value={this.state.form.currentYoutubeLink}
                onChange={this.handleChange('currentYoutubeLink')}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Add more items"
                        onClick={this.handleAddMoreYoutubeLinks}
                      >
                        <AddBox />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Render list of successfully uploaded youtube links */}
              {this.state.form.youtubeLinks.map((link, index) => (
                <UploadedLink key={index}>
                  {link}{' '}
                  <Clear
                    className="uploaded-link__clear"
                    data-link-id={index}
                    onClick={this.handleRemoveYoutubeLink}
                  />
                </UploadedLink>
              ))}

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
