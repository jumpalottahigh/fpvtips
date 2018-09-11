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

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0 auto;

  li:before {
    content: '⭐';
  }

  li {
    font-weight: bold;
    text-align: left;
  }

  @media (min-width: 650px) {
    width: 420px;
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
              <PaperCard elevation={1}>
                FPV flying spots
                <sup style={{ fontSize: '1.3rem', lineHeight: '1rem' }}>🆕</sup>
              </PaperCard>
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
              <PaperCard elevation={1}>
                Blog
                <sup style={{ fontSize: '1.3rem', lineHeight: '1rem' }}>🆕</sup>
              </PaperCard>
            </Link>
          </Grid>
          <p style={{ marginTop: '3rem' }}>
            This project is a work in progress and coming soon to bring the FPV
            community closer together and flying! Stay tuned and enjoy!
          </p>
          <h3>Coming Soon:</h3>
          <FeatureList>
            <li>Add and save FPV flying spots on the map</li>
            <li>Share location and meet other FPV pilots</li>
            <li>Beginner friendly FPV glossary</li>
            <li>Recommended Tools, upvoted by the community</li>
            <li>Submit an article to the blog</li>
          </FeatureList>
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
