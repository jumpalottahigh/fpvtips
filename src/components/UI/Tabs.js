import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import WeatherIcon from '@material-ui/icons/WbSunny'
import PhotoIcon from '@material-ui/icons/Photo'
import VideoIcon from '@material-ui/icons/VideoLibrary'

import WeatherInfo from '../WeatherInfo'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3, minHeight: '15rem' }}>
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

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          centered
          fullWidth
          onChange={this.handleChange}
        >
          <Tab icon={<WeatherIcon />} label="Weather" />
          <Tab icon={<PhotoIcon />} label="Photos" />
          <Tab icon={<VideoIcon />} label="Videos" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <WeatherInfo />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Photos</TabContainer>}
        {value === 2 && <TabContainer>Videos</TabContainer>}
      </div>
    )
  }
}

export default withStyles(styles)(SimpleTabs)
