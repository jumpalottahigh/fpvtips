import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Grid from '../components/UI/Grid'
import PaperCard from '../components/UI/PaperCard'
import FormDictionary from '../components/UI/FormDictionary'

import TextField from '@material-ui/core/TextField'
import LinkIcon from '@material-ui/icons/Link'

const helmetStrings = {
  title: 'Fpvtips | Dictionary',
  description:
    'Dictionary, abbreviations, terms and slag, we cover it all. The FPV drone flying hobby could be a bit heavy on the terminology side at first, but this should easy you in.',
  keywords:
    'transmitter, receiver, fpv spot, fpv footage, drone pictures, quad build, build a drone, custom drone build, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const StyledPaperCard = styled(PaperCard)`
  position: relative;

  a[aria-label='wiki link'] {
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

const DictionaryItem = ({ data }) => (
  <StyledPaperCard key={data.id}>
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    {data.link && (
      <a
        aria-label="wiki link"
        href={data.link}
        target="_blank"
        rel="noreferrer"
      >
        <LinkIcon />
      </a>
    )}
    {data.author && data.authorSocialLink ? (
      <a href={data.authorSocialLink} target="_blank" rel="noopener noreferrer">
        <span>{data.author}</span>
      </a>
    ) : data.author ? (
      <span>{data.author}</span>
    ) : null}
  </StyledPaperCard>
)

export default class DictionaryPage extends React.Component {
  constructor(props) {
    super(props)

    // Get data from props
    let dictionary = props.data.allContentfulDictionaryItem.edges

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
        node.description.toLowerCase().includes(value.toLowerCase())
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
    const { dictionary, filtered, search } = this.state

    return (
      <Layout>
        <Helmet
          title={helmetStrings.title}
          meta={[
            {
              name: 'description',
              content: helmetStrings.description,
            },
            {
              name: 'keywords',
              content: helmetStrings.keywords,
            },
          ]}
        />

        {/* Page headings */}
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
          value={search}
        />

        {/* Dictionary item grid list */}
        <Grid>
          {filtered.length > 0
            ? filtered.map(({ node }) => (
                <DictionaryItem key={node.id} data={node} />
              ))
            : dictionary.map(({ node }) => (
                <DictionaryItem key={node.id} data={node} />
              ))}
        </Grid>

        {/* Submit an entry FAB and Modal */}
        <FormDictionary
          name="submit-dictionary-item"
          contentfulType="dictionaryItem"
        />
      </Layout>
    )
  }
}

export const dictionaryPageQuery = graphql`
  query dictionaryPageQuery {
    allContentfulDictionaryItem {
      edges {
        node {
          id
          title
          description
          link
          author
          authorSocialLink
        }
      }
    }
  }
`
