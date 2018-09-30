import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Grid from '../components/UI/Grid'
import PaperCard from '../components/UI/PaperCard'
import SubmitForm from '../components/UI/SubmitForm'

import TextField from '@material-ui/core/TextField'
import LinkIcon from '@material-ui/icons/Link'

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

const formStrings = {
  link: 'Wiki link',
}

export default class DictionaryPage extends React.Component {
  constructor(props) {
    super(props)

    // Get data from props
    let dictionary = props.data.allDictionaryJson.edges

    this.state = {
      search: '', // Search input
      dictionary: dictionary, // All items
      filtered: [], // Filtered items
    }
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
        <h4>Dictionary</h4>
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

        {/* Submit an entry FAB and Modal */}
        <SubmitForm {...formStrings} fireNode="dictionary" noFeaturesInput />
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
