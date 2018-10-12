import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Fade } from 'react-reveal'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'
import Grid from '../components/UI/Grid'
import FeatureList from '../components/UI/FeatureList'

import {
  bolts,
  box,
  earthNA,
  openBook,
  paperAndPencil,
  hammer,
  gettingStarted,
} from '../utils/svg'

const featureListContent = [
  'Save and browse FPV flying spots on the map',
  'Preview spots with videos and photos',
  'Share location and meet other FPV pilots',
  'Live wind and weather conditions',
  'Beginner friendly FPV glossary / dictionary',
  'Recommended tools, upvoted by the community',
  'Submit a dictionary entry',
  'Submit an article to the blog',
  'Quad builder - 3D model playground',
]

const pageList = [
  {
    image: earthNA,
    link: '/fpv-map/',
    title: 'FPV map',
  },
  {
    image: paperAndPencil,
    link: '/blog/',
    title: 'Blog',
  },
  {
    image: openBook,
    link: '/dictionary/',
    title: 'Dictionary',
  },
  {
    image: box,
    link: '/shopping-list/',
    title: 'Shopping list',
  },
  {
    image: hammer,
    link: '/tools/',
    title: 'Tools',
  },
  {
    image: gettingStarted,
    link: '/getting-started/',
    title: 'Getting started',
  },
  {
    image: bolts,
    link: '/quad-builder/',
    title: 'Quad builder',
  },
]

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
          <h1>Let's bring the FPV community closer together and flying!</h1>
          <Grid>
            {pageList.map((page, index) => (
              <Fade key={index} bottom delay={index * 25}>
                <Link to={page.link}>
                  <PaperCard hoverable="true" scale="true">
                    <img src={page.image} style={{ width: '150px' }} />
                    <br />
                    {page.title}
                  </PaperCard>
                </Link>
              </Fade>
            ))}
          </Grid>
          <Fade bottom duration={2000}>
            <p style={{ margin: '3rem 0' }}>
              This project is in a public beta and as such many features are
              still not completely ready.
            </p>
          </Fade>
          <Fade bottom duration={2000}>
            <h3>Coming Soon:</h3>
          </Fade>
          <FeatureList>
            {featureListContent.map((item, index) => (
              <Fade key={index} bottom delay={index * 55}>
                <li>{item}</li>
              </Fade>
            ))}
          </FeatureList>
          <p style={{ margin: '3rem 0' }}>
            If you want to get involved,{' '}
            <a href="mailto:georgiyanev.gy@gmail.com">get in touch</a> or check
            out the{' '}
            <a href="https://github.com/jumpalottahigh/fpvtips">
              project repository
            </a>
            . Or,{' '}
            <Link to="/fpv-map/">
              submit info about an FPV spot you like flying so we can put it on
              the map.
            </Link>
            <br />
            Stay tuned and enjoy!
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
