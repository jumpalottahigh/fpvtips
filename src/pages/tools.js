import IconButton from '@material-ui/core/IconButton'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { FaArrowDown, FaArrowUp, FaExternalLinkAlt } from 'react-icons/fa'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import FormDictionary from '../components/UI/FormDictionary'
import Grid from '../components/UI/Grid'
import PaperCard from '../components/UI/PaperCard'

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

export default class ToolsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tools: [...props.data.allContentfulToolItem.edges],
    }
  }

  // Upvote and downvote tools
  updateScore = (toolId, votedScore) => {
    // Mutate score in state
    let { tools } = this.state

    // Find a matching id and update the score
    tools.forEach(tool => {
      if (tool.node.id === toolId) {
        tool.node.score = parseInt(tool.node.score) + parseInt(votedScore)
        tool.node.voted = true
      }
    })

    // Update state
    this.setState({
      tools,
    })

    // Save a local copy of state to LS
    self.localStorage.setItem(LS_KEY_TOOLS_STATE, JSON.stringify(tools))

    // Disable voting buttons if voted
  }

  componentDidMount() {
    // Check LS for voted tools
    let toolsCachedState = JSON.parse(
      self.localStorage.getItem(LS_KEY_TOOLS_STATE)
    )

    // If nothing in local storage, update LS with state
    if (!toolsCachedState) return

    // Update state with cached tools state
    this.setState({
      tools: toolsCachedState,
    })
  }

  render() {
    const { tools } = this.state

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
                {node.image && (
                  <div className="image-container">
                    <img
                      src={node.image.fluid.src}
                      srcSet={node.image.fluid.srcSet}
                      alt={node.title}
                    />
                  </div>
                )}
                <div className="content">
                  {node.title && (
                    <h3 className="content__title">{node.title}</h3>
                  )}
                  {node.description && (
                    <p className="content__description">{node.description}</p>
                  )}
                  {node.author && (
                    <p className="content__author">{node.author}</p>
                  )}
                </div>
                <div>
                  <div className="score-container">
                    <span className="score">{node.score}</span>
                    <IconButton
                      onClick={() => this.updateScore(node.id, 1)}
                      aria-label="Upvote"
                      disabled={node.voted}
                    >
                      <FaArrowUp />
                    </IconButton>
                    <IconButton
                      onClick={() => this.updateScore(node.id, -1)}
                      aria-label="Downvote"
                      disabled={node.voted}
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
        <FormDictionary name="submit-tool-item" contentfulType="toolItem" />
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
          title
          description
          link
          author
          score
          image {
            fluid(maxWidth: 350, quality: 75) {
              # TODO: figure out how to make this work
              # ...GatsbyContentfulFluid_withWebp
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
