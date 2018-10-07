import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Fade } from 'react-reveal'

import Layout from '../../components/Layout/layout'
import PaperCard from '../../components/UI/PaperCard'
import Grid from '../../components/UI/Grid'

const StyledBlogLink = styled(Link)`
  font-size: 1rem;

  p,
  small {
    color: initial;
  }
`

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Grid gap="3rem" col600="1" col900="2" col1200="3">
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Fade key={node.fields.slug} bottom>
                <StyledBlogLink to={node.fields.slug}>
                  <PaperCard hoverable="true">
                    <h3>{title}</h3>
                    <small>{node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <div>
                      <small>
                        {node.timeToRead} min read by {node.frontmatter.author}
                      </small>
                    </div>
                  </PaperCard>
                </StyledBlogLink>
              </Fade>
            )
          })}
        </Grid>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
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
          }
          timeToRead
        }
      }
    }
  }
`
