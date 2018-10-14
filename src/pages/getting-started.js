import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'
import FeatureList from '../components/UI/FeatureList'

const helmetStrings = {
  title: 'Fpvtips | Getting started',
  description:
    'What do you need when you are getting started with FPV drone racing? Who to follow, what to read, what to watch, how to build a drone, what gear do you need. We cover those questions here.',
  keywords:
    'getting started, buy a drone, buy a quad, how to fly a drone, how to fly a quad, quad build, build a drone, custom drone build, building a quad, building a drone, drone build guide, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const GettingStartedPage = () => (
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
    <h1>Getting Started Page</h1>
    <FeatureList>
      <li>Who to follow on Youtube, Twitter, Instagram</li>
      <li>Resources, sites, communities, discord</li>
      <li>Stories</li>
    </FeatureList>
    <h3>Coming Soon™</h3>
  </Layout>
)

export default GettingStartedPage
