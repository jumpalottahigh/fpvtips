import React from 'react'
import styled from 'styled-components'
import PaperCard from './PaperCard'
import FAB from './FAB'

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
import { FaInstagram, FaYoutube } from 'react-icons/fa'

import fire from '../../utils/firebase'
import mapLegendData from '../../data/mapLegendData'

const modalDimensions = {
  width: '360px',
  height: '620px',
}

const modalDimensions900 = {
  width: '560px',
  height: '660px',
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
        instagramLinks: [],
        youtubeLinks: [],
        author: '',
        newMarker: this.props.newMarker || null,
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
    let {
      title,
      description,
      features,
      instagramLinks,
      youtubeLinks,
      author,
    } = this.state.form

    // Basic form validation
    if (title == '' || description == '') return

    // Get new marker data
    let lat = 0
    let lng = 0

    if (this.state.form.newMarker != null) {
      lat = this.state.form.newMarker.lat
      lng = this.state.form.newMarker.lng
    }

    let data = {
      title,
      description,
      features,
      instagramLinks,
      youtubeLinks,
      author,
      lat,
      lng,
    }

    // Send data to Firebase
    fire
      .database()
      .ref(this.props.fireNode)
      .push(data)

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
          author: '',
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
            message={<span id="message-id">Saved</span>}
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
              data-netlify="true"
              autoComplete="off"
              noValidate
              onSubmit={this.handleFormSubmit}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Needed for Netlify form submissions */}
              <input type="hidden" name="form-name" value={this.props.name} />
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
                <React.Fragment>
                  <InputLabel htmlFor="select-multiple-checkbox">
                    {features}
                  </InputLabel>
                  <Select
                    multiple
                    value={this.state.form.features}
                    onChange={this.handleChange('features')}
                    input={
                      <OutlinedInput
                        labelWidth={0}
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
                </React.Fragment>
              )}
              {/* TODO: These will need to be extensible to be able to add more than 1 link */}

              <TextField
                id="instagramLinks"
                label={
                  <IconLabel>
                    <FaInstagram className="icon" />{' '}
                    <span className="text">{instagramLinks}</span>
                  </IconLabel>
                }
                value={this.state.form.instagramLinks}
                onChange={this.handleChange('instagramLinks')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="youtubeLinks"
                label={
                  <IconLabel>
                    <FaYoutube className="icon" />{' '}
                    <span className="text">{youtubeLinks}</span>
                  </IconLabel>
                }
                value={this.state.form.youtubeLinks}
                onChange={this.handleChange('youtubeLinks')}
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
