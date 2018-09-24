import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Video from './Video'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
})

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  }

  render() {
    const { classes, videoLinks } = this.props
    const { expanded } = this.state

    return (
      <div className={classes.root}>
        {videoLinks.map((videoUrl, index) => (
          <ExpansionPanel
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={this.handleChange(`panel${index}`)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Video {++index}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{ width: '100%', height: '100%' }}>
                <Video
                  src={videoUrl}
                  width="560"
                  height="315"
                  title={`Video - ${videoUrl}`}
                />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(ControlledExpansionPanels)
