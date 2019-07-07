import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import WeatherIcon from '@material-ui/icons/WbSunny'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'
import WeatherInfo from '../components/WeatherInfo'

const StyledPaperCard = styled(PaperCard)`
  position: relative;

  a {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    color: #777;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`

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
    <h4>Weather conditions near you</h4>

    {/* Dictionary item grid list */}
    <StyledPaperCard>
      <WeatherInfo />
    </StyledPaperCard>
  </Layout>
)

export default WeatherPage
