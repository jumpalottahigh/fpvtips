import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Fade } from 'react-reveal'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'
import Grid from '../components/UI/Grid'
import Section from '../components/UI/Section'
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
  {
    label: 'Save and browse FPV flying spots on the map',
    completed: true,
  },
  {
    label: 'Preview spots with videos and photos',

    completed: true,
  },
  {
    label: 'Share location and meet other FPV pilots',

    completed: false,
  },
  {
    label: 'Live wind and weather conditions',

    completed: true,
  },
  {
    label: 'Beginner friendly FPV glossary / dictionary',
    completed: false,
  },
  {
    label: 'Recommended tools, upvoted by the community',
    completed: false,
  },
  {
    label: 'Submit a dictionary entry',
    completed: true,
  },
  {
    label: 'Submit an article to the blog',
    completed: false,
  },
  {
    label: 'Quad builder - 3D model playground',
    completed: false,
  },
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

const AnnouncementCard = styled.div`
  margin: 3rem auto;
  max-width: 65ch;
  font-size: 18px;

  span {
    text-transform: uppercase;
    color: #efb93f;

    sup {
      text-transform: none;
    }
  }
`

const StyledFeatureList = styled(FeatureList)`
  li:before {
    content: '🔳';
  }

  li.completed:before {
    content: '✅';
  }
`

class IndexPage extends React.Component {
  handleBioVideoClick = e => {
    e.target.pause()
    e.target.currentTime = 0
    e.target.load()
  }

  render() {
    const homePageSections = this.props.data.allHomePageSectionsJson.edges

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
            <Grid>
              {pageList.map((page, index) => (
                <Fade key={index} bottom delay={index * 25} ssrFadeout={true}>
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
            <Fade bottom duration={1500} ssrFadeout={true}>
              <AnnouncementCard>
                <PaperCard color="#fff" bgcolor="#576A70">
                  This project is still in <span>public beta</span> and some
                  features might be still missing. The official launch date is{' '}
                  <span>
                    Nov 3<sup>rd</sup> 2018
                  </span>
                  .
                </PaperCard>
              </AnnouncementCard>
            </Fade>
            <Fade bottom duration={2500} ssrFadeout={true}>
              <div style={{ paddingBottom: '3.5rem' }}>
                <h3>Current progress:</h3>
                <StyledFeatureList>
                  {featureListContent.map(({ label, completed }, index) => (
                    <li key={index} className={completed ? 'completed' : ''}>
                      {label}
                    </li>
                  ))}
                </StyledFeatureList>
              </div>
            </Fade>
          </Intro>
          {/* Home Page Sections */}
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
              <a href="https://blog.georgi-yanev.com/learning/how-i-got-into-software-development/">
                web developer
              </a>
              . You can find me on{' '}
              <a href="https://twitter.com/jumpalottahigh">twitter</a>,{' '}
              <a href="https://github.com/jumpalottahigh">github</a>,{' '}
              <a href="https://twitch.com/jumpalottahigh">twitch</a> and{' '}
              <a href="https://www.linkedin.com/in/yanevgeorgi">linkedin</a>.
              <br />
              <br />I <strong>write code</strong>, solve problems and sometimes
              stream on twitch. I also <strong>love flying FPV drones</strong>,
              3D printing, contributing to open source, and working on FPVTIPS.
              <br />
              <br />I also{' '}
              <a href="https://blog.georgi-yanev.com">maintain a blog</a> where
              I write about life, goals, software and flying FPV drones.
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
                  src="https://www.georgi-yanev.com/static/landing-a-quad-1-a959ba1dfed1d6abe2e8052b61bfb0b4.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Bio>

          <h2 style={{ color: '#0375d8', paddingTop: '2.5rem' }}>
            So, let's fly together!
          </h2>

          <p style={{ margin: '3rem auto', maxWidth: '65ch' }}>
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
