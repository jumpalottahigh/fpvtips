import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import SyncIcon from '@material-ui/icons/Sync'

import {
  waterDrop,
  wind,
  bolts,
  arrowUp,
  hillsMountains,
  urban,
} from '../utils/svg'

// Configure open weather map API key
const API_KEY = process.env.GATSBY_OPEN_WEATHER_MAP_KEY
const LS_KEY_WEATHER_DATA = 'fpvtips_weather_data'
const LS_KEY_CACHE_TIMESTAMP = 'fpvtips_cache_timestamp'
const TIME_TO_CACHE = 3600 // in seconds

const WeatherSection = styled.div`
  span {
    font-weight: 500;
    font-size: 16px;
  }
  h4 span {
    text-transform: uppercase;
    font-size: 18px;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 1rem;
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

  // Takes in kelvin temperature and returns C and F values
  convertTemperature = kelvin => {
    if (!kelvin) return

    let temperatureString = ''
    let celsius = kelvin - 273.15
    let farenhein = (celsius * 9) / 5 + 32

    temperatureString = `${celsius.toFixed(1)}°C | ${farenhein.toFixed(1)}°F
    `
    return temperatureString
  }

  // Takes in a timestamp and returns hour and minute
  timestampToTime = ts => {
    if (!ts) return

    ts = ts * 1000
    let dateString = ''
    let date = new Date(ts)

    dateString = `${date.getHours()}:${date.getMinutes()}`

    return dateString
  }

  // Takes in a timestamp and returns full year, month, day, hour and minute
  timestampToDate = ts => {
    if (!ts) return

    ts = ts * 1000
    let dateString = ''
    let date = new Date(ts)

    dateString = `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}`

    return dateString
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

    // Calculate time since last update
    const lastUpdateAt = this.timestampToDate(weather.dt)
    let humidity = ''
    let pressure = ''
    let temperature = ''
    let windDeg = ''
    let windSpeed = ''
    let sunrise = ''
    let sunset = ''

    // Get main weather data
    if (weather.main) {
      // Calculate temperature in C and F
      temperature = this.convertTemperature(weather.main.temp)

      // Grab humidity
      humidity = weather.main.humidity

      // Grab pressure
      pressure = weather.main.pressure
    }

    // Get wind data
    if (weather.wind) {
      // Grab wind direction
      windDeg = weather.wind.deg

      // Grab windSpeed
      windSpeed = weather.wind.speed
    }

    // Get sunrise and sunset data
    if (weather.sys) {
      // Grab the sunrise data
      sunrise = this.timestampToTime(weather.sys.sunrise)
      // Grab the sunset data
      sunset = this.timestampToTime(weather.sys.sunset)
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {this.state.cacheTimestamp && weather ? (
          // If we have cached data, render it
          <React.Fragment>
            {/*
              Data available in the open weather API:
              ---------------------------------------
              location / location name
              dt - timestamp of info update from API
              temperature
              humidity
              pressure
              wind speed
              wind deg
              sunrise
              sunset
            */}
            <WeatherSection>
              <h4>
                Current weather in <span>{weather.name}</span>:
              </h4>
              <div>
                updated at:{' '}
                <span>{lastUpdateAt != undefined ? lastUpdateAt : ''}</span>
              </div>
              <div>
                temperature:{' '}
                <span>{temperature != undefined ? temperature : ''}</span>
              </div>
              <div>
                <img src={waterDrop} alt="Humidity icon" />
                humidity: <span>{humidity != undefined ? humidity : ''}</span>
              </div>
              <div>
                <img src={bolts} alt="Pressure icon" />
                pressure: <span>{pressure != undefined ? pressure : ''}</span>
              </div>
              <div>
                <img src={wind} alt="Wind icon" />
                wind speed:{' '}
                <span>{windSpeed != undefined ? windSpeed : ''}</span>
              </div>
              {windDeg != undefined && (
                <div>
                  <img
                    src={arrowUp}
                    // Apply an additional 180 rotate to the arrow to make it point in the right direction
                    // wind coming from the north should be at 0 deg.
                    style={{ transform: `rotate(${windDeg + 180}deg)` }}
                    alt="Wind direction icon"
                  />
                  wind direction: <span>{windDeg}</span>
                </div>
              )}
              <div>
                <img src={hillsMountains} alt="Sunrise icon" />
                sunrise: <span>{sunrise != undefined ? sunrise : ''}</span>
              </div>
              <div>
                <img src={urban} alt="Sunset icon" />
                sunset: <span>{sunset != undefined ? sunset : ''}</span>
              </div>
            </WeatherSection>
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
