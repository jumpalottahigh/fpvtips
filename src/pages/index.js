import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout/layout'

import logo from '../assets/logo.png'

const Promo = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3.5rem);

  img {
    max-width: 80%;
  }

  h3 {
    font-size: 2rem;
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
        <Promo>
          <img src={logo} alt="FPVTIPS" />
          <h3>Coming Soon™</h3>
          <br />
          <br />
          <br />
          <br />
          Meanwhile, get a taste of what's coming by checking out some of the
          build and troubleshooting articles at:
          <a href="https://blog.georgi-yanev.com/news/">
            blog.georgi-yanev.com
          </a>
        </Promo>
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
