import React from 'react'
import styled from 'styled-components'
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

const Text = styled.div`
  display: grid;
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: 650px) {
    width: 72ch;
  }

  p {
    text-align: left;
  }
`

const GettingStartedPage = () => (
  <Layout backgroundColor="#fff">
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
    <Text>
      <h1>Getting started with FPV</h1>
      <p>
        So, you have made up your mind and want to try FPV? Like many things in
        life your FPV journey is exactly that - <strong>YOUR JOURNEY</strong>.
      </p>
      <p>
        So how you do things is entirely up to you and there surely is more than
        one way to accomplish certain milestones on your way to becoming a
        decent FPV drone pilot.
      </p>
      <p>
        FPVtips's goal is to share those different paths. For instance, some
        people prefer to spend more hours on a simulator before they try the
        real thing. Others find the simulator boring. You do you!
      </p>
      <p>Here are some resources that could help you on your journey.</p>
    </Text>
    <Text>
      <h2>Who to follow?</h2>
      <div>contents</div>

      <p>
        This is an opinionated, not sponsored list. If you feel someone you care
        deeply about was left behind send a suggestion at{' '}
        <a href="mailto:suggestions@fpvtips.com">suggestions@fpvtips.com</a>
      </p>
    </Text>

    <p>Who to follow</p>
    <FeatureList>
      <li>Who to follow on Youtube, Twitter, Instagram</li>
      <li>Resources, sites, communities, discord</li>
      <li>Stories</li>
    </FeatureList>
    <h3>Coming Soon™</h3>
  </Layout>
)

export default GettingStartedPage
