import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'
import Grid from '../components/UI/Grid'
import Section from '../components/UI/Section'

import {
  bolts,
  box,
  earthNA,
  openBook,
  paperAndPencil,
  hammer,
  gettingStarted,
} from '../utils/svg'

import dictionary from '../assets/pages/home/dictionary.svg'
import map from '../assets/pages/home/map.svg'
import upvotedTools from '../assets/pages/home/upvoted-tools.svg'
import videos from '../assets/pages/home/videos.svg'
import weather from '../assets/pages/home/weather.svg'

const featureListContent = [
  {
    label: 'Browse FPV flying spots on the map and share your own',
    image: map,
  },
  {
    label: 'Watch videos and photos from FPV spots',
    image: videos,
  },
  {
    label: 'Live wind and weather conditions',

    image: weather,
  },
  {
    label: 'Beginner friendly FPV dictionary',
    image: dictionary,
  },
  {
    label: 'Recommended tools, upvoted by the community',
    image: upvotedTools,
  },
]

const pageList = [
  {
    image: earthNA,
    link: '/fpv-map/',
    title: 'FPV map',
  },
  {
    image: gettingStarted,
    link: '/getting-started/',
    title: 'Getting started',
  },
  {
    image: paperAndPencil,
    link: '/blog/',
    title: 'Blog',
  },
  {
    image: hammer,
    link: '/tools/',
    title: 'Tools',
  },
  {
    image: openBook,
    link: '/dictionary/',
    title: 'Dictionary',
  },
]

const helmetStrings = {
  title: 'Fpvtips',
  keywords:
    'transmitter, receiver, fpv spot, fpv footage, drone pictures, quad build, build a drone, custom drone build, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const Intro = styled.div`
  margin: -1rem;
  padding: 1rem;
  background-color: #fafafa;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='71' height='71' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d5d5d5' fill-opacity='0.07'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.07'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  /* background by SVGBackgrounds.com */
`

const Bio = styled.div`
  margin: -1rem;
  padding: 3.5rem 1rem;
  background-color: #eee;

  img {
    width: 7rem;
    border-radius: 12px;
  }

  p {
    text-align: left;
    max-width: 70ch;
    margin: 0 auto;
  }

  a {
    font-size: 1rem;
  }

  .video-wrapper {
    max-width: 70ch;
    margin: 2rem auto 0;
  }

  video {
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: auto;
    z-index: -100;
    max-width: 70ch;
    cursor: pointer;
  }
`

const StyledFeatureList = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;

    img {
      /* max-width: 14rem; */
      height: 10rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;

    h2 {
      grid-column: span 2;
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;

    h2 {
      grid-column: span 3;
    }
  }
`

class IndexPage extends React.Component {
  handleBioVideoClick = e => {
    e.target.pause()
    e.target.currentTime = 0
    e.target.load()
  }

  render() {
    const firstHomePageSection = this.props.data.allHomePageSectionsJson
      .edges[0]
    let homePageSections = this.props.data.allHomePageSectionsJson.edges
    // Remove the first item
    homePageSections.shift()

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={helmetStrings.title}
          meta={[
            {
              name: 'keywords',
              content: helmetStrings.keywords,
            },
          ]}
        />
        <div>
          <Intro>
            <h1>Let's bring the FPV community closer together and flying!</h1>
            <Grid col600="2" col900="2" col1200="3">
              {pageList.map((page, index) => (
                <Link key={index} to={page.link}>
                  <PaperCard hoverable="true" scale="true">
                    <img src={page.image} style={{ width: '150px' }} />
                    <br />
                    <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                      {page.title}
                    </span>
                  </PaperCard>
                </Link>
              ))}
            </Grid>
            {/* Render first home page section standalone */}
            <div style={{ marginTop: '3rem' }}>
              <Section data={firstHomePageSection.node} />
            </div>
            <div style={{ padding: '3rem 0' }}>
              <StyledFeatureList>
                <h2>Features:</h2>
                {featureListContent.map(({ label, image }) => (
                  <div key={label}>
                    <img src={image} alt={label} />
                    <p>{label}</p>
                  </div>
                ))}
              </StyledFeatureList>
            </div>
          </Intro>
          {/* Render the rest of the home page sections, except the first one */}
          {homePageSections.map(section => (
            <Section key={section.node.id} data={section.node} />
          ))}

          {/* Bio section */}
          <Bio>
            <a href="https://twitter.com/jumpalottahigh">
              <img
                src="https://avatars2.githubusercontent.com/u/4155121?s=460&v=4"
                alt="Georgi Yanev photo"
              />
            </a>
            <h3>Hi, I'm Georgi</h3>
            <p>
              I'm a {` `}
              <a
                className="highlight"
                href="https://blog.georgi-yanev.com/learning/how-i-got-into-software-development/"
              >
                web developer
              </a>
              . You can find me on{' '}
              <a
                className="highlight"
                href="https://twitter.com/jumpalottahigh"
              >
                twitter
              </a>
              ,{' '}
              <a className="highlight" href="https://github.com/jumpalottahigh">
                github
              </a>
              ,{' '}
              <a className="highlight" href="https://twitch.tv/jumpalottahigh">
                twitch
              </a>{' '}
              and{' '}
              <a
                className="highlight"
                href="https://www.linkedin.com/in/yanevgeorgi"
              >
                linkedin
              </a>
              .
              <br />
              <br />I <strong>write code</strong>, solve problems and sometimes
              stream on twitch. I <strong>love flying FPV drones</strong>, 3D
              printing, contributing to open source, and working on FPVTIPS.
              <br />
              <br />I also{' '}
              <a className="highlight" href="https://blog.georgi-yanev.com">
                maintain a blog
              </a>{' '}
              where I write about life, goals, software and flying FPV drones.
            </p>
            <div className="video-wrapper">
              <video
                autoPlay
                loop
                muted
                playsInline
                onClick={this.handleBioVideoClick}
              >
                <source
                  src="https://www.georgi-yanev.com/static/landing-a-quad-1-d1a878f7ef756c703ebeeecdb529e63e.webm"
                  type="video/webm"
                />
                <source
                  src="https://www.georgi-yanev.com/static/landing-a-quad-1-a959ba1dfed1d6abe2e8052b61bfb0b4.mp4"
                  type="video/mp4"
                />
                Tap to play video
              </video>
            </div>
          </Bio>

          <h2 style={{ color: '#0375d8', paddingTop: '2.5rem' }}>
            <Link to="/fpv-map/">So, let's fly together!</Link>
          </h2>

          <p style={{ margin: '3rem auto', maxWidth: '65ch' }}>
            If you want to get involved,{' '}
            <a className="highlight" href="mailto:georgiyanev.gy@gmail.com">
              get in touch
            </a>{' '}
            or check out the{' '}
            <a
              className="highlight"
              href="https://github.com/jumpalottahigh/fpvtips"
            >
              project repository
            </a>
            . Or,{' '}
            <Link className="highlight" to="/fpv-map/">
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

export const homePageSectionsQuery = graphql`
  query homePageSectionsQuery {
    allHomePageSectionsJson {
      edges {
        node {
          id
          title
          content
          color
          bgcolor
          bgimage
          video
          buttons {
            link
            external
            label
            variant
            color
            minWidth
          }
        }
      }
    }
  }
`
