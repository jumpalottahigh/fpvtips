import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import PhotoIcon from '@material-ui/icons/Photo'
import PlaceIcon from '@material-ui/icons/Place'
import VideoIcon from '@material-ui/icons/VideoLibrary'

import MapLegend from '../Map/MapLegend'
import Video from './Video'
import Photo from './Photo'
import Grid from '../UI/Grid'
import FeatureIcons from '../Map/FeatureIcons'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

const Place = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  gap: 3rem;

  h3 {
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin: 0;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #6f6f6f;
  }

  @media (min-width: 600px) {
    gap: 2rem;
    grid-template-columns: 3fr 1fr;
  }
`

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, currentPlaceData } = this.props
    const { value } = this.state

    return (
      <div className={`${classes.root} container-tabs`}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          centered
          variant="fullWidth"
          onChange={this.handleChange}
        >
          <Tab icon={<PlaceIcon fontSize="small" />} label="Place" />
          <Tab icon={<PhotoIcon fontSize="small" />} label="Photos" />
          <Tab icon={<VideoIcon fontSize="small" />} label="Videos" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <Place>
              <div>
                <h3>
                  <span>Title: </span>
                  {currentPlaceData.title}
                </h3>
                <p>
                  <span>Description: </span>
                  {currentPlaceData.description}
                </p>
                <div>
                  <span>Features: </span>
                  <FeatureIcons place={currentPlaceData.features} />
                </div>
                {currentPlaceData.author && (
                  <p>
                    <span>Added by: </span>
                    {currentPlaceData.authorSocialLink !== null ? (
                      <a
                        href={currentPlaceData.authorSocialLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {currentPlaceData.author}
                      </a>
                    ) : (
                      <strong>{currentPlaceData.author}</strong>
                    )}
                  </p>
                )}
              </div>
            </Place>
            <MapLegend />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Grid gap="30px" col600="1" col900="2" col1200="1">
              {currentPlaceData.photoLinks &&
                currentPlaceData.photoLinks.map((photo, index) => (
                  <Photo key={index} src={photo} />
                ))}
            </Grid>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <Grid gap="30px" col600="1" col900="2" col1200="1">
              {currentPlaceData.videoLinks &&
                currentPlaceData.videoLinks.map((video, index) => (
                  <Video
                    key={index}
                    src={video}
                    width="560"
                    height="315"
                    title={`Video - ${video}`}
                  />
                ))}
            </Grid>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(SimpleTabs)
