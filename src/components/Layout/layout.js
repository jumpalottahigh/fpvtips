import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

import AppBar from '../UI/AppBar'
import Footer from './Footer'
import Wrapper from './Wrapper'

const Layout = ({ children }) => (
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
          ]}
        />
        <AppBar />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </React.Fragment>
    )}
  />
)

export default Layout
