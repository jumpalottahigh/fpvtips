import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'
import Grid from '../components/UI/Grid'
import FeatureList from '../components/UI/FeatureList'

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
            <Link to="/fpv-map">
              <PaperCard hoverable="true">
                FPV map
                <sup style={{ fontSize: '1.3rem', lineHeight: '1rem' }}>🆕</sup>
              </PaperCard>
            </Link>
            <Link to="/blog">
              <PaperCard hoverable="true">
                Blog
                <sup style={{ fontSize: '1.3rem', lineHeight: '1rem' }}>🆕</sup>
              </PaperCard>
            </Link>
            <Link to="/dictionary">
              <PaperCard hoverable="true">
                Dictionary
                <sup style={{ fontSize: '1.3rem', lineHeight: '1rem' }}>🆕</sup>
              </PaperCard>
            </Link>
            <Link to="/shopping-list">
              <PaperCard hoverable="true">Shopping list</PaperCard>
            </Link>
            <Link to="/tools">
              <PaperCard hoverable="true">Tools</PaperCard>
            </Link>
            <Link to="/getting-started">
              <PaperCard hoverable="true">Getting started</PaperCard>
            </Link>
            <Link to="/quad-builder">
              <PaperCard hoverable="true">Quad builder</PaperCard>
            </Link>
          </Grid>
          <p style={{ marginTop: '3rem' }}>
            This project is in a public beta and as such many features are still
            not completely ready.
            <br />
            <em>
              Our mission is to bring the FPV community closer together and
              flying!
            </em>{' '}
            <br />
            <br />
            If you want to get involved,{' '}
            <a href="mailto:georgiyanev.gy@gmail.com">get in touch</a> or check
            out the{' '}
            <a href="https://github.com/jumpalottahigh/fpvtips">
              project repository
            </a>
            . Or,{' '}
            <Link to="/fpv-map">
              submit info about an FPV spot you like flying so we can put it on
              the map.
            </Link>
            <br />
            Stay tuned and enjoy!
          </p>
          <h3>Coming Soon:</h3>
          <FeatureList>
            <li>Add and save FPV flying spots on the map</li>
            <li>Share location and meet other FPV pilots</li>
            <li>Live wind and weather conditions</li>
            <li>Beginner friendly FPV glossary / dictionary</li>
            <li>Recommended Tools, upvoted by the community</li>
            <li>Submit a dictionary entry</li>
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
