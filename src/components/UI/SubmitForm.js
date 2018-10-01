import React from 'react'
import styled from 'styled-components'
import PaperCard from './PaperCard'
import FAB from './FAB'

import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'

import fire from '../../utils/firebase'
import mapLegendData from '../../data/mapLegendData'

const modalDimensions = {
  width: '360px',
  height: '500px',
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
        features: [],
        link: '',
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
    let { title, description, features, link, author } = this.state.form

    // Basic form validation
    if (title == '' || description == '') return

    // Get new marker data
    let { lat, lng } = this.state.form.newMarker
    if (!lat || !lng) return

    let data = {
      title,
      description,
      features,
      link,
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
    this.setState({
      open: false,
      form: {
        title: '',
        description: '',
        features: [],
        link: '',
        author: '',
        newMarker: this.props.newMarker || null,
      },
    })
  }

  render() {
    // Get strings from props or assign defaults otherwise
    let {
      heading = 'Submit a new item:',
      title = 'Title',
      description = 'Description',
      features = 'Features',
      link = 'YouTube link',
      author = 'Your name',
      submit = 'Submit',
    } = this.props

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
                {heading}
              </h4>
              <TextField
                required
                id="title"
                label={title}
                value={this.state.form.title}
                onChange={this.handleChange('title')}
                margin="normal"
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
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {mapLegendData.map(({ symbol, label }) => (
                      <MenuItem key={symbol} value={symbol}>
                        <Checkbox
                          checked={
                            this.state.form.features.indexOf(symbol) > -1
                          }
                        />
                        <ListItemText primary={`${symbol} - ${label}`} />
                      </MenuItem>
                    ))}
                  </Select>
                </React.Fragment>
              )}
              <TextField
                id="link"
                label={link}
                value={this.state.form.link}
                onChange={this.handleChange('link')}
                margin="normal"
              />
              <TextField
                id="author"
                label={author}
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
                {submit}
              </Button>
            </form>
          </PaperCard>
        </StyledModal>
      </React.Fragment>
    )
  }
}
