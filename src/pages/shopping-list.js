import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'

const helmetStrings = {
  title: 'Fpvtips | Shopping list',
  description:
    'The shopping list page contains a curated list of items worth getting if you are in the FPV hobby.',
  keywords:
    'drone, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const ShoppingListPage = () => (
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
    <h1>Shopping List Page</h1>
    <h3>Coming Soon™</h3>
  </Layout>
)

export default ShoppingListPage
