import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import Map from '../components/Map/Map'
import SubmitForm from '../components/UI/SubmitForm'
import Tabs from '../components/UI/Tabs'

const FPVMapPage = ({ data }) => (
  <Layout>
    <Map markers={data.allMapMarkersJson.edges} />
    <Tabs />
    <SubmitForm fireNode="fpv-map" />
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
