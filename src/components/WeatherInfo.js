import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import SyncIcon from '@material-ui/icons/Sync'

// Configure open weather map API key
const API_KEY = process.env.GATSBY_OPEN_WEATHER_MAP_KEY

const WeatherList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0 auto;

  li {
    text-align: left;
  }

  @media (min-width: 650px) {
    width: 250px;
  }
`

class WeatherInfo extends React.Component {
  state = {
    coords: {
      lat: 33.749, // Helsinki: 60.16
      lng: 84.388, // Helsinki: 24.93
    },
    weather: {},
  }

  handleWeatherSync = () => {
    console.log('Fetch weather info')
    // Request user geo location
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      const PRODUCTION_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
      const DEV_WEATHER_API = `./dummyDevData.json`

      // Get weather data from Open Weather Map
      fetch(DEV_WEATHER_API)
        .then(res => res.json())
        .then(
          result => {
            console.log(result)
            this.setState({
              coords: { lat: latitude, lng: longitude },
              weather: result,
            })
          },
          error => {
            this.setState({
              error,
            })
          }
        )
    })
  }

  render() {
    const { weather } = this.state

    // TODO: improve validation check
    // `weather.wind.speed`

    return (
      <div>
        <Button
          onClick={this.handleWeatherSync}
          variant="contained"
          color="primary"
        >
          Get weather info
          <SyncIcon style={{ marginLeft: '0.5rem' }} />
        </Button>

        <h4>Current weather:</h4>
        <WeatherList>
          {/* <li>🌤️ {weather.weather[0].description}</li>
          <li>💨 Wind speed: {weather.wind.speed}</li>
          <li>🌫️ Wind deg: {weather.wind.deg}</li>
          <li>🌡️ Temperature: {weather.main.temp}</li>
          <li>🗜️ Pressure: {weather.main.pressure}</li>
          <li>💧 Humidity: {weather.main.humidity}</li> */}
        </WeatherList>
      </div>
    )
  }
}

export default WeatherInfo
