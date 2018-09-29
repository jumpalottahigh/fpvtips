import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import SyncIcon from '@material-ui/icons/Sync'

// Configure open weather map API key
const API_KEY = process.env.GATSBY_OPEN_WEATHER_MAP_KEY
const LS_KEY_WEATHER_DATA = 'fpvtips_weather_data'
const LS_KEY_CACHE_TIMESTAMP = 'fpvtips_cache_timestamp'
const TIME_TO_CACHE = 3600 // in seconds

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
    cacheTimestamp: '',
  }

  handleWeatherSync = () => {
    const currentTimestamp = Math.floor(Date.now() / 1000)

    // Request user geo location and fetch from the API
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      const PRODUCTION_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`

      // Get weather data from Open Weather Map
      fetch(PRODUCTION_WEATHER_API)
        .then(res => res.json())
        .then(
          result => {
            // Update state
            this.setState({
              coords: { lat: latitude, lng: longitude },
              weather: result,
              // Save a cache timestamp
              cacheTimestamp: currentTimestamp,
            })

            // Cache the result and the timestamp in local storage
            self.localStorage.setItem(
              LS_KEY_WEATHER_DATA,
              JSON.stringify(result)
            )
            self.localStorage.setItem(LS_KEY_CACHE_TIMESTAMP, currentTimestamp)
          },
          error => {
            this.setState({
              error,
            })
          }
        )
    })
  }

  componentDidMount() {
    // Check LS for cached data
    const cachedData = JSON.parse(
      self.localStorage.getItem(LS_KEY_WEATHER_DATA)
    )

    if (cachedData == null) {
      return
    }

    // Get cache timestamp from LS
    const cacheTimestamp = parseInt(
      self.localStorage.getItem(LS_KEY_CACHE_TIMESTAMP)
    )

    // Current timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000)

    // Update state from LS if cache is fresh
    if (currentTimestamp < cacheTimestamp + TIME_TO_CACHE) {
      this.setState({
        weather: cachedData,
        cacheTimestamp: cacheTimestamp,
      })
    } else {
      // If LS cache is stale, clear it
      self.localStorage.removeItem(LS_KEY_WEATHER_DATA)
      self.localStorage.removeItem(LS_KEY_CACHE_TIMESTAMP)
    }
  }

  render() {
    const { weather } = this.state

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {this.state.cacheTimestamp ? (
          // If we have a cached data, render it
          <React.Fragment>
            <h4>Current weather:</h4>
            <WeatherList>
              <li>🌤️ {weather.weather[0].description}</li>
              <li>💨 Wind speed: {weather.wind.speed}</li>
              <li>🌫️ Wind deg: {weather.wind.deg}</li>
              <li>🌡️ Temperature: {weather.main.temp}</li>
              <li>🗜️ Pressure: {weather.main.pressure}</li>
              <li>💧 Humidity: {weather.main.humidity}</li>
            </WeatherList>
          </React.Fragment>
        ) : (
          // Otherwise display the fetch button
          <Button
            onClick={this.handleWeatherSync}
            variant="contained"
            color="primary"
          >
            Get weather info
            <SyncIcon style={{ marginLeft: '0.5rem' }} />
          </Button>
        )}
      </div>
    )
  }
}

export default WeatherInfo
