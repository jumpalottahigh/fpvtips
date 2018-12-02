import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/layout'
import BaseGrid from '../components/UI/Grid'

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
  padding: 2rem 0;

  @media (min-width: 650px) {
    width: 72ch;
  }

  p {
    text-align: left;
  }
`

const Grid = styled(BaseGrid)`
  a:hover {
    color: #0375d8;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  a {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: #000;
  }

  img {
    border-radius: 50%;
    max-height: 96px;
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
    {/* TODO: add some photos here and a couple of paragraphs */}
    {/* <Text>
      <div>
        Picture of Transmitter and Liftoff
        <br />
        Fly simulators
      </div>
      <div>
        Picture of Snapper 7
        <br />
        Fly micro quads
      </div>
      <div>
        Picture of Wizard and Furious
        <br />
        Fly mini quads
      </div>
    </Text> */}
    <div style={{ padding: '2rem 0' }}>
      <h2>Who to follow?</h2>
      <p>
        My goal is not to create an extensive list, but rather give you some
        links to click and explore for yourself.
      </p>
      <Grid gap="3rem" col600="1" col900="2" col1200="3">
        <div>
          <a
            href="https://www.youtube.com/user/loraan"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAxApyDj1Ctf91CJmYtAoprgFt_E7LEkxbCZ4A=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Joshua Bardwell"
            />
            <p>Joshua Bardwell</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UC3ioIOr3tH6Yz8qzr418R-g"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAyvfZN4fti7arkutkRR9g8FoOenqmNwZgSTyg=s288-mo-c-c0xffffffff-rj-k-no"
              alt="UAVfutures"
            />
            <p>UAVfutures</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/user/MrSteeledavis"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAx4F_wmfgXromjtyGv4BaKHJ5B_flieV_2h8A=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Mr Steele"
            />
            <p>Mr Steele</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCHxiKnzTyzE9Qez8ZGpQbPQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAwVNvFiKKiHzT4yvHkT8iiQEYFvc8SLvWNaVA=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Le Drib"
            />
            <p>Le Drib</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/user/ZoeFullThrottle"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAzxJw7Q3eonyIhFqd6eU6txXrzgQoWeErmJfg=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Zoe FPV"
            />
            <p>Zoe FPV</p>
          </a>
        </div>

        <div>
          <a
            href="https://www.youtube.com/user/stingersswarm"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAzHS5NR4eb07xntoxOg_FcaSvT-vsJ3Dfe7Qw=s288-mo-c-c0xffffffff-rj-k-no"
              alt="StingersSwarm"
            />
            <p>StingersSwarm</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UC3gi4CBQi9NvQn1EJIWw7oQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAzOuLMtxlrc-SePZib7ILNJc6Z4DmdsdCOjxg=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Onigiri"
            />
            <p>Onigiri</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCemG3VoNCmjP8ucHR2YY7hw"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAxnb41f54AJWIAYmT2emEpznnUYtQfkE8nGIg=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Rotor Riot"
            />
            <p>Rotor Riot</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCObMtTKitupRxbYHLlwHE3w"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAxRhcaoNItPcVhXSrMewx38OgzP285cmz8DOA=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Project Blue Falcon"
            />
            <p>Project Blue Falcon</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UC3c9WhUvKv2eoqZNSqAGQXg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAyALeF9DYa1JVh007XCJO80TCmBwOffQH_HKw=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Drone Mesh"
            />
            <p>Drone Mesh</p>
          </a>
        </div>

        <div>
          <a
            href="https://www.youtube.com/user/TheAndyRC"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAxVtpWCExriLihqXrJqMN7QKf1wXvDkH69v_g=s288-mo-c-c0xffffffff-rj-k-no"
              alt="AndyRC"
            />
            <p>AndyRC</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/user/graysonhobby"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a-/AN66SAw3DDr27t41R8nIiDEJWXpohuO_O0QHXBZQsA=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Grayson Hobby"
            />
            <p>Grayson Hobby</p>
          </a>
        </div>
      </Grid>
    </div>

    <Text>
      <h2>Additional resources, communities, discord</h2>
      <div>
        <p>
          <a className="highlight" href="https://discord.gg/7gX23dd">
            Kwad Camp
          </a>
          - Rotor Riot discord
        </p>
      </div>
      <div>
        <p>
          <a className="highlight" href="https://discord.gg/H6Ra7xB">
            UAVfutures
          </a>
          - discord
        </p>
      </div>
      <div>
        <p>
          <a className="highlight" href="https://www.reddit.com/r/Multicopter/">
            /r/Multicopter
          </a>
          - reddit
        </p>
      </div>
    </Text>

    <Text>
      <p>
        This is an opinionated, not sponsored list. If you feel someone you care
        deeply about was left behind, or if you want your name taken down,
        <a className="highlight" href="mailto:georgiyanev.gy@gmail.com">
          drop an email
        </a>
        .
      </p>
    </Text>
  </Layout>
)

export default GettingStartedPage
