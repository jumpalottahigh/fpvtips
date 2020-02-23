import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Grid from '../components/UI/Grid'
import PaperCard from '../components/UI/PaperCard'
import Video from '../components/UI/Video'

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
  title: 'Fpvtips | Videos',
  description: 'Videos from the FPVTIPS YouTube channel',
  keywords:
    'transmitter, receiver, fpv spot, fpv footage, drone pictures, quad build, build a drone, custom drone build, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const videoList = [
  'https://www.youtube.com/watch?v=INYdY-2tP9E',
  'https://www.youtube.com/watch?v=W4f8TyaOjBw',
  'https://www.youtube.com/watch?v=MYFAHx4gWeE',
  'https://www.youtube.com/watch?v=qMm0v1Va6wg',
  'https://www.youtube.com/watch?v=EpG4Ba4xpy4',
  'https://www.youtube.com/watch?v=cfssLvuPOO4',
  'https://www.youtube.com/watch?v=8DyISPMRlNk',
  'https://www.youtube.com/watch?v=fG4mwlPwN10',
  'https://www.youtube.com/watch?v=_kdu70SP6po',
  'https://www.youtube.com/watch?v=yE98RnLp_Lg',
  'https://www.youtube.com/watch?v=69Io14W8LWU',
  'https://www.youtube.com/watch?v=fvExmj3n4rU',
  'https://www.youtube.com/watch?v=JSkqB5bLJBg',
  'https://www.youtube.com/watch?v=R_31tQNzBpA',
  'https://www.youtube.com/watch?v=iwnFSL7SAcQ',
  'https://www.youtube.com/watch?v=OBl8kv0XOkQ',
  'https://www.youtube.com/watch?v=FhtL0zSx1AU',
]

const VideosPage = () => (
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
    <h4>Videos</h4>

    {/* Dictionary item grid list */}
    <Grid col900="2" col1200="3">
      {videoList.map(video => (
        <StyledPaperCard key={video}>
          <div style={{ maxWidth: '640px', margin: '2rem auto' }}>
            <Video
              width="100%"
              height="315"
              src={video}
              title={`FPVTIPS YouTube video ${video}`}
            />
          </div>
        </StyledPaperCard>
      ))}
    </Grid>
  </Layout>
)

export default VideosPage
