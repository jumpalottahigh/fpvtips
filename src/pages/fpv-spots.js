import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import Map from '../components/Map/Map'
import WeatherInfo from '../components/WeatherInfo'

const FPVSpotsPage = ({ data }) => (
  <Layout>
    <Map markers={data.allMapMarkersJson.edges} />
    <WeatherInfo />
  </Layout>
)

export default FPVSpotsPage

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
