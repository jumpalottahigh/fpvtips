import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Grid from '../components/UI/Grid'
import PaperCard from '../components/UI/PaperCard'
import FAB from '../components/UI/FAB'

import TextField from '@material-ui/core/TextField'
import LinkIcon from '@material-ui/icons/Link'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

import fire from '../utils/firebase'
const NODE_NAME = 'dictionary'

const StyledPaperCard = styled(PaperCard)`
  position: relative;

  a {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    color: #777;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`

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

export default class DictionaryPage extends React.Component {
  constructor(props) {
    super(props)

    // Get data from props
    let dictionary = props.data.allDictionaryJson.edges

    this.state = {
      search: '', // Search input
      dictionary: dictionary, // All items
      filtered: [], // Filtered items
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
      .ref(NODE_NAME)
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

  // Dictionary page search input
  handleSearch = e => {
    const value = e.target.value || ''

    const searchResults = this.state.dictionary.filter(({ node }) => {
      if (
        node.title.toLowerCase().includes(value.toLowerCase()) ||
        node.description.toLowerCase().includes(value.toLowerCase()) ||
        node.author.toLowerCase().includes(value.toLowerCase())
      ) {
        return node
      }
    })

    this.setState({
      search: value,
      filtered: searchResults,
    })
  }

  componentDidMount() {
    // Setup ESC listener
    document.addEventListener(
      'keydown',
      e => {
        if (e.code === 'Escape') {
          if (this.state.search == '') return
          this.setState({ search: '' }, () => this.handleSearch(e))
        }
      },
      false
    )
  }

  render() {
    return (
      <Layout>
        {/* Page titles */}
        <h4 style={{ borderBottom: '1px solid4red' }}>Dictionary</h4>
        <h3>Abbreviations, terms and slang</h3>

        {/* Search input */}
        <TextField
          placeholder="Search..."
          inputProps={{
            'aria-label': 'Search',
          }}
          style={{ width: '100%', maxWidth: '300px', marginBottom: '2rem' }}
          onChange={this.handleSearch}
          value={this.state.search}
        />

        {/* Dictionary item grid list */}
        <Grid>
          {this.state.filtered.length > 0
            ? this.state.filtered.map(({ node }) => {
                return (
                  <StyledPaperCard key={node.id}>
                    <h3>{node.title}</h3>
                    <p>{node.description}</p>
                    {node.link && (
                      <a href={node.link}>
                        <LinkIcon />
                      </a>
                    )}
                    {node.author && <span>{node.author}</span>}
                  </StyledPaperCard>
                )
              })
            : this.state.dictionary.map(({ node }) => {
                return (
                  <StyledPaperCard key={node.id}>
                    <h3>{node.title}</h3>
                    <p>{node.description}</p>
                    {node.link && (
                      <a href={node.link}>
                        <LinkIcon />
                      </a>
                    )}
                    {node.author && <span>{node.author}</span>}
                  </StyledPaperCard>
                )
              })}
        </Grid>

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
                label="Wiki link"
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
      </Layout>
    )
  }
}

export const dictionaryPageQuery = graphql`
  query dictionaryPageQuery {
    allDictionaryJson {
      edges {
        node {
          id
          title
          description
          link
          author
        }
      }
    }
  }
`
