import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'
import FeatureList from '../components/UI/FeatureList'

const helmetStrings = {
  title: 'Fpvtips | Tools',
  description:
    'The tools page contains a selection of community upvoted tools.',
  keywords:
    'tools, screwdriver, hexdriver, wrench, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const ToolsPage = () => (
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
    <h1>Tools Page</h1>
    <FeatureList>
      <li>community upvoted list</li>
    </FeatureList>
    <h3>Coming Soon™</h3>
  </Layout>
)

export default ToolsPage
