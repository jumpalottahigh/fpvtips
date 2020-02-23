import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import Map from '../components/Map/Map'

const helmetStrings = {
  title: 'Fpvtips | FPV map',
  description:
    "Save and share your FPV spots. Browser other people's shared places. Watch videos, see picture. Fly together!",
  keywords:
    'save fpv spot, browse fpv spots, watch fpv footage, watch drone pictures, map, fpv flying spots, where to fly drones, where to fly a quad, flying fpv, flying racing drones, how to fly a drone, how to fly a quad, quad build, build a drone, custom drone build, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const FPVMapPage = ({ data }) => (
  <Layout>
    <Helmet
      title={helmetStrings.title}
      meta={[
        {
          name: 'description',
          content: helmetStrings.description,
        },
        {
          name: 'keywords',
          content: helmetStrings.keywords,
        },
      ]}
    />
    <Map markers={data.allContentfulMapMarkers.edges} />
  </Layout>
)

export default FPVMapPage

export const mapMarkersQuery = graphql`
  query mapMarkersQuery {
    allContentfulMapMarkers {
      edges {
        node {
          id
          lat
          lng
          title
          description
          features
          author
          authorSocialLink
          videoLinks
          photoLinks
        }
      }
    }
  }
`
