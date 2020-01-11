import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import AdSense from 'react-adsense'

import Layout from '../../components/Layout/layout'
import PaperCard from '../../components/UI/PaperCard'
import Grid from '../../components/UI/Grid'

const StyledBlogLink = styled(Link)`
  font-size: 1rem;
  height: 100%;

  p,
  small {
    color: initial;
  }
`

const StyledPaperCard = styled(PaperCard)`
  display: grid;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;

    .gatsby-image-wrapper {
      grid-row: 1 / 5;
      max-height: 250px;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`

const helmetStrings = {
  title: 'Fpvtips | Blog',
  description: 'Here you will find useful articles on many FPV drone topics.',
  keywords:
    'quad build, build a drone, custom drone build, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

class IndexPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
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
        <h1>Blog posts</h1>
        <Grid
          gap="4rem 2rem"
          col600="1"
          col900="2"
          col1200="3"
          style={{ width: '100%' }}
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <StyledBlogLink key={node.fields.slug} to={node.fields.slug}>
                <StyledPaperCard hoverable="true" style={{ height: '100%' }}>
                  {node.frontmatter.ogImage !== null && (
                    <Img
                      fluid={node.frontmatter.ogImage.childImageSharp.fluid}
                      alt={title}
                    />
                  )}
                  <h3>{title}</h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  <div>
                    <small>
                      {node.timeToRead} min read by {node.frontmatter.author}
                    </small>
                  </div>
                </StyledPaperCard>
              </StyledBlogLink>
            )
          })}
        </Grid>

        <AdSense.Google
          client="ca-pub-8470358888871889"
          slot="6212610784"
          style={{ display: 'block' }}
          format="fluid"
          responsive="true"
          layoutKey="-5w+bz-1z-4l+vv"
        />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            author
            ogImage {
              childImageSharp {
                fluid(maxWidth: 672) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
