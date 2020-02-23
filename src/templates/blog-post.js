import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout/layout'
import PromoBanner from '../components/UI/PromoBanner'

const BlogContent = styled.div`
  text-align: left;
  max-width: 80ch;
  margin: 0 auto;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Fpvtips | ${post.frontmatter.title}`}
        >
          {post.frontmatter.canonical && (
            <link rel="canonical" href={post.frontmatter.canonical} />
          )}
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <PromoBanner
          linkTo="https://www.banggood.com/promotion-banggood-2019-summer-prime-sale-9178.html?utmid=8617&p=NY211410857261201705"
          imagePath="/promo/banggood-stripe-4.jpg"
        />
        <p>
          {post.frontmatter.author}, {post.frontmatter.date}
        </p>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <PromoBanner
          linkTo="https://www.banggood.com/promotion-2019-summer-rc-outdoor-sale-promotion-9166.html?utmid=8759&utm_design=80&p=NY211410857261201705"
          imagePath="/promo/banggood-stripe-4.jpg"
        />
        <PromoBanner
          linkTo="https://www.banggood.com/promotion-banggood-2019-summer-prime-sale-9178.html?utmid=8617&p=NY211410857261201705"
          imagePath="/promo/banggood-square.jpg"
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        author
        title
        date(formatString: "DD MMMM YYYY")
        canonical
      }
    }
  }
`
