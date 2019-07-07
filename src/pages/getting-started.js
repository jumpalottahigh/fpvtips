import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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

const TipsGrid = styled(BaseGrid)`
  .tips {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 1rem;

    .img-wrapper {
      border-radius: 0;
      width: 100%;
      max-width: 100%;
      max-height: 460px;
      margin-bottom: 1rem;
    }
  }
`

const GettingStartedPage = ({ data }) => (
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
    <TipsGrid
      gap="1.5rem"
      col600="1"
      col900="1"
      col1200="3"
      style={{ padding: '3rem 0' }}
    >
      <div className="tips">
        <div className="img-wrapper">
          <Img
            fluid={data.taranis.edges[0].node.childImageSharp.fluid}
            alt={data.taranis.edges[0].node.name}
          />
        </div>
        <p>
          <strong>Fly simulators!</strong>
          <br />
          Get a decent radio, for example, a{' '}
          <a href="https://bit.ly/taranis-qx7" className="highlight">
            Taranis Q X7
          </a>{' '}
          and practice. I fly{' '}
          <a href="https://www.liftoff-game.com/" className="highlight">
            Liftoff
          </a>{' '}
          and I love it. Another decent choice should be{' '}
          <a href="https://www.velocidrone.com/" className="highlight">
            Velocidrone
          </a>{' '}
          and there certainly are others. Simulators are also a great way to get
          throught the winter season.
        </p>
      </div>
      <div className="tips">
        <div className="img-wrapper">
          <Img
            fluid={data.snapper7.edges[0].node.childImageSharp.fluid}
            alt={data.snapper7.edges[0].node.name}
          />
        </div>
        <p>
          <strong>Fly micro drones!</strong>
          <br />
          Micro quads are a great way to have a ton of fun and get into the
          hobby. Don't let the name mislead you. In 2018, micro quads pack a LOT
          of punch and should not be underestimated. These two options in
          particular are awesome to fly indoors and outdoors and won't break the
          bank:{' '}
          <a href="https://bit.ly/mobula7" className="highlight">
            Mobula
          </a>{' '}
          or{' '}
          <a href="https://bit.ly/snapper-7" className="highlight">
            Snapper 7
          </a>
          .
        </p>
      </div>
      <div className="tips">
        <div className="img-wrapper">
          <Img
            fluid={data.aomway.edges[0].node.childImageSharp.fluid}
            alt={data.aomway.edges[0].node.name}
          />
        </div>
        <p>
          <strong>Fly mini quads!</strong>
          <br />
          The FPV mini quad (usually a 5'' model) is a real beast. In some cases
          could be a bit intimidating at first for beginners as they come with
          plenty of power, but fear not, keep at it, stay safe and you will soon
          get the hang of it. In other words, there isn't anything quite like
          the real thing! I started flying on a{' '}
          <a href="https://bit.ly/wizardx220" className="highlight">
            Wizard x220
          </a>{' '}
          and then went on and built my own quad. There are some really good
          options out there! And I have my eye set on a{' '}
          <a href="https://bit.ly/diatone-m540" className="highlight">
            Diatone 2018 GT-M540
          </a>{' '}
          for season 2019!
        </p>
      </div>
    </TipsGrid>
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
        <div>
          <a
            href="https://www.youtube.com/channel/UCeB2VpligdA3PrOsgkhFAjw"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a/AGF-l79bZMHv05GOngITq3pooEXXPkfx379RbW0HBA=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Kelsey Hunt"
            />
            <p>Kelsey Hunt</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCTG9Xsuc5-0HV9UcaTeX1PQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a/AGF-l78JSOBu5JfvdTQIaO2WJiA9iNqzMBKr5npHHQ=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Skitzo FPV"
            />
            <p>Skitzo FPV</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCnJyFn_66GMfAbz1AW9MqbQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a/AGF-l78RW1TyADVQqBpZsooJTke5JGSh7DxcUQAnlQ=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Albert Kim"
            />
            <p>Albert Kim</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/user/MaiOnHigh/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a/AGF-l79VK-3IgIVpuPwjuy7SsiEmwSRMil6TFK7I-g=s288-mo-c-c0xffffffff-rj-k-no"
              alt="MaiOnHigh"
            />
            <p>MaiOnHigh</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCOs-AacDIQvk6oxTfv2LtGA"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a/AGF-l79tDfsEnUaN4HeFwyuT3xFraEqBTjzIHlfEjA=s288-c-k-c0xffffffff-no-rj-mo"
              alt="Gal Kremer"
            />
            <p>Gal Kremer</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a/AGF-l7-b9XTppBdzOfi6gYLp7VgjSwXmFxjkrEhjuQ=s288-mo-c-c0xffffffff-rj-k-no"
              alt="fpvtips"
            />
            <p>fpvtips</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://yt3.ggpht.com/a/AGF-l7-nUiOz4hZIPV4PlSaSqqTXLdHEbdr3HnEHqw=s288-mo-c-c0xffffffff-rj-k-no"
              alt="Georgi FPV"
            />
            <p>Georgi FPV</p>
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

export const dictionaryPageQuery = graphql`
  query {
    taranis: allFile(
      filter: { relativePath: { regex: "/^getting-started/taranis/" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 575, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    aomway: allFile(
      filter: { relativePath: { regex: "/^getting-started/aomway/" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 575, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    snapper7: allFile(
      filter: { relativePath: { regex: "/^getting-started/snapper7/" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 575, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
