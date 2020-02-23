import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'
import WeatherInfo from '../components/WeatherInfo'

const helmetStrings = {
  title: 'Weather | Fpvtips',
  description: 'Current weather conditions near you',
  keywords:
    'weather, current weather conditions, can i fly where I am, what is the current wind speed, is it raining, transmitter, receiver, fpv spot, fpv footage, drone pictures, quad build, build a drone, custom drone build, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const WeatherPage = () => (
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

    {/* Page headings */}
    <h4>FPV weather conditions near you</h4>

    {/* Dictionary item grid list */}
    <PaperCard>
      <WeatherInfo />
    </PaperCard>
  </Layout>
)

export default WeatherPage
