import IconButton from '@material-ui/core/IconButton'
import * as contentful from 'contentful-management'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Helmet from 'react-helmet'
import { FaArrowDown, FaArrowUp, FaExternalLinkAlt } from 'react-icons/fa'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import FormDictionary from '../components/UI/FormDictionary'
import Grid from '../components/UI/Grid'
import PaperCard from '../components/UI/PaperCard'

import { hammer } from '../utils/svg'

let CONTENTFUL_PERSONAL_TOKEN =
  process.env.GATSBY_CONTENTFUL_PERSONAL_ACCESS_TOKEN
let CONTENTFUL_SPACE = process.env.GATSBY_CONTENTFUL_SPACE_ID
let CONTENTFUL_ENVIRONMENT = 'master'

function sendToContentful({ contentful_id, score }) {
  // If any of the contentful required variables are missing return
  if (
    !CONTENTFUL_PERSONAL_TOKEN ||
    !CONTENTFUL_SPACE ||
    !CONTENTFUL_ENVIRONMENT ||
    !contentful_id ||
    !score
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
      environment.getEntry(contentful_id).then(entry => {
        entry.fields.score['en-US'] = score
        return entry.update()
      })
    )
    .then(entry => entry.publish())
    .then(entry => console.log(`Entry ${entry.sys.id} updated.`))
    .catch(console.error)
}

const StyledPaperCard = styled(PaperCard)`
  position: relative;
  display: grid;

  grid-template-columns: 1fr;

  img {
    width: 100%;
  }

  .content__description {
    text-align: left;
  }

  .content__author,
  .link-container {
    text-align: right;
  }

  .score {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0 12px;
  }

  .score-container,
  .link-container {
    display: inline-block;
    width: 50%;
  }

  .score-container {
    text-align: left;
  }

  .score-container button {
    padding: 4px;
  }

  .score-container > * {
  }

  @media (min-width: 600px) {
    grid-template-columns: 1fr 2fr;

    .image-container {
      grid-row: 1 / 3;
    }

    .content__description {
      padding: 0 1rem;
    }

    .link-container {
      grid-column: 2 / -1;
    }

    img {
      max-width: 225px;
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
`

const helmetStrings = {
  title: 'Fpvtips | Tools',
  description:
    'The tools page contains a selection of community upvoted tools.',
  keywords:
    'tools, screwdriver, hexdriver, wrench, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const backgroundImage = `url("/pattern-tools.svg")`

const LS_KEY_TOOLS_STATE = 'fpvtips_tools_state'
const LS_KEY_VOTED_TOOLS = 'fpvtips_voted_tools'
const LS_KEY_TOOLS_STATE_CACHE_TIMESTAMP = 'fpvtips_tools_state_cache_timestamp'
const TIME_TO_CACHE = 300 // in seconds
export default class ToolsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tools: [...props.data.allContentfulToolItem.edges],
      votedToolsList: [],
    }
  }

  // Update list of voted tools in LS
  updateVotedList = id => {
    // Read tools voted list from LS
    let votedToolsList =
      JSON.parse(self.localStorage.getItem(LS_KEY_VOTED_TOOLS)) || []

    // Save the ID if it's not in the list already
    if (!votedToolsList.includes(id)) {
      votedToolsList.push(id)
    }

    // Save back to LS
    self.localStorage.setItem(
      LS_KEY_VOTED_TOOLS,
      JSON.stringify(votedToolsList)
    )

    return votedToolsList
  }

  // Upvote and downvote tools
  updateScore = (toolId, votedScore) => {
    // Mutate score in state
    let { tools } = this.state
    let updatedTool, votedToolsList

    // Find a matching id and update the score
    tools.forEach(tool => {
      if (tool.node.id === toolId) {
        // Increment score
        tool.node.score = parseInt(tool.node.score) + parseInt(votedScore)
        // Grab the updated node
        updatedTool = tool.node
        // Add element to voted tools list in LS
        votedToolsList = this.updateVotedList(tool.node.id)
      }
    })

    // Update state
    this.setState({
      votedToolsList,
      tools,
    })

    // Save a local copy of state to LS
    self.localStorage.setItem(LS_KEY_TOOLS_STATE, JSON.stringify(tools))
    // Save a timestamp to cache the content for 5 minutes, until the Netlify build and deploy has passed
    self.localStorage.setItem(
      LS_KEY_TOOLS_STATE_CACHE_TIMESTAMP,
      Math.floor(Date.now() / 1000)
    )

    // Update the data in Contentful
    sendToContentful(updatedTool)
  }

  componentDidMount() {
    // Check LS for voted tools ids
    let votedToolsList = JSON.parse(
      self.localStorage.getItem(LS_KEY_VOTED_TOOLS)
    )
    if (votedToolsList) {
      // But still update voted tools list
      this.setState({
        ...this.state,
        votedToolsList,
      })
    }

    // Check LS for voted tools state
    let toolsCachedState = JSON.parse(
      self.localStorage.getItem(LS_KEY_TOOLS_STATE)
    )

    // If nothing in local storage, update LS with state
    if (!toolsCachedState) return

    // Get cache timestamp from LS
    const cacheTimestamp = parseInt(
      self.localStorage.getItem(LS_KEY_TOOLS_STATE_CACHE_TIMESTAMP)
    )

    // Current timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000)

    // Update state with cached tools state if cache is still fresh
    if (currentTimestamp < cacheTimestamp + TIME_TO_CACHE) {
      this.setState({
        ...this.state,
        tools: toolsCachedState,
      })
    } else {
      // If LS cache is stale, clear it
      self.localStorage.removeItem(LS_KEY_TOOLS_STATE)
      self.localStorage.removeItem(LS_KEY_TOOLS_STATE_CACHE_TIMESTAMP)
    }
  }

  render() {
    const { tools, votedToolsList } = this.state

    return (
      <Layout backgroundColor="#fff" backgroundImage={backgroundImage}>
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
        <h1>Tools</h1>

        {/* Tools list */}
        <Grid col600="1" col900="1" col1200="2">
          {tools.map(({ node }) => {
            return (
              <StyledPaperCard key={node.id}>
                {node.image ? (
                  <div className="image-container">
                    <a href={node.link} target="_blank" rel="noreferrer">
                      <Img fluid={node.image.fluid} alt={node.title} />
                    </a>
                  </div>
                ) : (
                  <div className="image-container">
                    <a href={node.link} target="_blank" rel="noreferrer">
                      <img
                        src={hammer}
                        style={{ opacity: '0.5' }}
                        alt="hammer svg icon"
                      />
                    </a>
                  </div>
                )}
                <div className="content">
                  {node.title && (
                    <h3 className="content__title">{node.title}</h3>
                  )}
                  {node.description && (
                    <p className="content__description">{node.description}</p>
                  )}
                  {node.author && node.authorSocialLink ? (
                    <a
                      href={node.authorSocialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="content__author">{node.author}</p>
                    </a>
                  ) : node.author ? (
                    <p className="content__author">{node.author}</p>
                  ) : null}
                </div>
                <div>
                  <div className="score-container">
                    <span className="score">{node.score}</span>
                    <IconButton
                      onClick={() => this.updateScore(node.id, 1)}
                      aria-label="Upvote"
                      disabled={
                        votedToolsList && votedToolsList.includes(node.id)
                      }
                    >
                      <FaArrowUp />
                    </IconButton>
                    <IconButton
                      onClick={() => this.updateScore(node.id, -1)}
                      aria-label="Downvote"
                      disabled={
                        votedToolsList && votedToolsList.includes(node.id)
                      }
                    >
                      <FaArrowDown />
                    </IconButton>
                  </div>
                  {node.link && (
                    <div className="link-container">
                      <a href={node.link} target="_blank" rel="noreferrer">
                        <IconButton color="primary">
                          <FaExternalLinkAlt />
                        </IconButton>
                      </a>
                    </div>
                  )}
                </div>
              </StyledPaperCard>
            )
          })}
        </Grid>

        {/* Submit an entry FAB and Modal */}
        <FormDictionary
          name="submit-tool-item"
          link="Link"
          contentfulType="toolItem"
        />
      </Layout>
    )
  }
}

export const toolsPageQuery = graphql`
  query toolsPageQuery {
    allContentfulToolItem {
      edges {
        node {
          id
          contentful_id
          title
          description
          link
          author
          authorSocialLink
          score
          image {
            fluid(maxWidth: 350, quality: 75) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
