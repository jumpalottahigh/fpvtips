import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import Palette from '../UI/Palette'

import AppBar from '../UI/AppBar'
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
        <Palette>
          <AppBar />
          {children}
          <Footer />
        </Palette>
      </React.Fragment>
    )}
  />
)

export default Layout
