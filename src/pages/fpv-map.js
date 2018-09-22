import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import Map from '../components/Map/Map'
import WeatherInfo from '../components/WeatherInfo'

const FPVMapPage = ({ data }) => (
  <Layout>
    <Map markers={data.allMapMarkersJson.edges} />
    <WeatherInfo />
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
