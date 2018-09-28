import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import Map from '../components/Map/Map'

const FPVMapPage = ({ data }) => (
  <Layout>
    <Map markers={data.allMapMarkersJson.edges} />
  </Layout>
)

export default FPVMapPage

export const mapMarkersQuery = graphql`
  query mapMarkersQuery {
    allMapMarkersJson {
      edges {
        node {
          id
          lat
          lng
          label
          description
          videoLinks
        }
      }
    }
  }
`
