import React from 'react'
import { navigate } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import MapIcon from '@material-ui/icons/Language'
import WeatherIcon from '@material-ui/icons/WbSunny'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
})

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('')

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
        navigate(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="FPV Map"
        value="/fpv-map/"
        icon={<MapIcon />}
      />
      <BottomNavigationAction
        label="Weather"
        value="/weather/"
        icon={<WeatherIcon />}
      />
    </BottomNavigation>
  )
}
