import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

import AppBar from '../UI/AppBar'
import Footer from './Footer'
import Wrapper from './Wrapper'

import ogImage from '../../assets/fpvtips-og.png'

const Layout = ({ children, backgroundColor, backgroundImage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content:
                'FPV, racing quads, drone, drones, quads, multirotor, rotor, fpv drone, fpv quad, racing drone,  open source software, OSS, Wizard x220, DIY, learning, education',
            },
            {
              property: 'og:image',
              content: `https://www.fpvtips.com${ogImage}`,
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:url',
              content: 'https://www.fpvtips.com',
            },
            {
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description,
            },
          ]}
        />
        <AppBar />
        <Wrapper
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImage}
        >
          {children}
        </Wrapper>
        <Footer />
      </React.Fragment>
    )}
  />
)

export default Layout
