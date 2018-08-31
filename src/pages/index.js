import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div>
          <h1>Your one-stop spot for all FPV related things.</h1>
          <Grid>
            <Link to="/fpv-spots">
              <PaperCard elevation={1}>FPV flying spots</PaperCard>
            </Link>
            <Link to="/dictionary">
              <PaperCard elevation={1}>Dictionary</PaperCard>
            </Link>
            <Link to="/shopping-list">
              <PaperCard elevation={1}>Shopping list</PaperCard>
            </Link>
            <Link to="/tools">
              <PaperCard elevation={1}>Tools</PaperCard>
            </Link>
            <Link to="/blog">
              <PaperCard elevation={1}>Blog</PaperCard>
            </Link>
          </Grid>
          <h3>Coming Soon™</h3>
          <p>
            Meanwhile, get a taste of what's coming by checking out some of the
            build and troubleshooting articles at:
            <a href="https://blog.georgi-yanev.com/news/">
              blog.georgi-yanev.com
            </a>
          </p>
        </div>
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
  }
`
