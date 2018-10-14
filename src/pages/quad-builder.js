import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'
import FeatureList from '../components/UI/FeatureList'

const helmetStrings = {
  title: 'Fpvtips | Quad builder',
  description:
    'The quad builder page is a configuration tool to help you prototype new quad builds.',
  keywords:
    'quad build, build a drone, custom drone build, building a quad, building a drone, drone build guide, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const QuadBuilderPage = () => (
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
    <h1>Quad Builder Page</h1>
    <FeatureList>
      <li>3D models</li>
      <li>parts</li>
    </FeatureList>
    <h3>Coming Soon™</h3>
  </Layout>
)

export default QuadBuilderPage
