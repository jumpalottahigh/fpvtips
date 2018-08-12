import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

import Footer from './footer'

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
        {children}
        <Footer />
      </React.Fragment>
    )}
  />
)

export default Layout
