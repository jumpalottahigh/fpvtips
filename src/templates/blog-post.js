import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'

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
        <p>{post.frontmatter.date}</p>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
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
        title
        date(formatString: "MMMM DD, YYYY")
        canonical
      }
    }
  }
`
