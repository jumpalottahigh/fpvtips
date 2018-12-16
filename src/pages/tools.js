import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import FormDictionary from '../components/UI/FormDictionary'
import Grid from '../components/UI/Grid'
import PaperCard from '../components/UI/PaperCard'
import { FaExternalLinkAlt } from 'react-icons/fa'

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

const ToolsPage = ({ data }) => (
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
      {data.allContentfulToolItem.edges.map(({ node }) => {
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
              {node.title && <h3 className="content__title">{node.title}</h3>}
              {node.description && (
                <p className="content__description">{node.description}</p>
              )}
              {node.author && <p className="content__author">{node.author}</p>}
            </div>
            {node.link && (
              <div className="link-container">
                <a href={node.link} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            )}
          </StyledPaperCard>
        )
      })}
    </Grid>

    {/* Submit an entry FAB and Modal */}
    <FormDictionary name="submit-tool-item" contentfulType="toolItem" />
  </Layout>
)

export default ToolsPage

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
