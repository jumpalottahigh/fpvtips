import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Grid from '../components/UI/Grid'
import PaperCard from '../components/UI/PaperCard'
import FAB from '../components/UI/FAB'

import TextField from '@material-ui/core/TextField'
import LinkIcon from '@material-ui/icons/link'
import Modal from '@material-ui/core/Modal'

// Example local data
// TODO: this could come from Firebase, Contentful or a number of other sources
const dictionary = [
  {
    abbr: 'FPV (First Person View)',
    description: 'coming soon™',
    link: 'https://en.wikipedia.org/wiki/First-person_view_(radio_control)',
  },
  {
    abbr: 'vTX (Video transmitter)',
    description: 'coming soon™',
    link: '',
  },
  {
    abbr: 'Receiver',
    description: 'coming soon™',
  },
  {
    abbr: 'Transmitter',
    description: 'coming soon™',
  },
  {
    abbr: 'Quad',
    description: 'coming soon™',
  },
]

const StyledPaperCard = styled(PaperCard)`
  position: relative;

  a {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`

const StyledModal = styled(Modal)`
  /* position: absolute;
  width: 500px;
  background-color: #fefefe;
  padding: 2rem;
  top: 50;
  left: 50;
  transform: translate(-50%, -50%); */
  /* box-shadow: */
`

export default class DictionaryPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      dictionary: dictionary,
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleSearch = e => {
    let { value } = e.target

    const searchResults = dictionary.filter(item => {
      if (
        item.abbr.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
      ) {
        return item
      }
    })

    this.setState({
      search: value,
      dictionary: searchResults,
    })
  }

  componentDidMount() {
    // Setup ESC listener
    document.addEventListener(
      'keydown',
      e => {
        e.code === 'Escape'
          ? this.setState({ search: '' }, () => this.handleSearch(e))
          : null
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
          {this.state.dictionary.map((item, index) => {
            return (
              <StyledPaperCard key={index}>
                <h3>{item.abbr}</h3>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link}>
                    <LinkIcon />
                  </a>
                )}
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
          <PaperCard>
            TODO: Create a form here that on submit will send items to Firebase
            for approval
          </PaperCard>
        </StyledModal>
      </Layout>
    )
  }
}
