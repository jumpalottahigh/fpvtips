import React from 'react'
import styled from 'styled-components'

// Configure open weather map API key
const API_KEY = process.env.GATSBY_OPEN_WEATHER_MAP_KEY

const dummyDevData = {
  coord: {
    lon: 25.34,
    lat: 60.31,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  base: 'stations',
  main: {
    temp: 284.15,
    pressure: 997,
    humidity: 76,
    temp_min: 284.15,
    temp_max: 284.15,
  },
  visibility: 10000,
  wind: {
    speed: 6.2,
    deg: 210,
  },
  clouds: {
    all: 0,
  },
  dt: 1537653000,
  sys: {
    type: 1,
    id: 5019,
    message: 0.061,
    country: 'FI',
    sunrise: 1537589070,
    sunset: 1537632977,
  },
  id: 637068,
  name: 'Sipoo',
  cod: 200,
}

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
    loading: true,
    weather: {},
  }

  componentDidMount() {
    // Request user geo location
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords

        // Get weather data from Open Weather Map
        // fetch(
        //   `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
        // )
        //   .then(res => res.json())
        //   .then(
        //     result => {
        //       console.log(result)
        //       this.setState({
        //         coords: { lat: latitude, lng: longitude },
        //         loading: false,
        //         weather: result,
        //       })
        //     },
        //     error => {
        //       this.setState({
        //         loading: true,
        //         error,
        //       })
        //     }
        //   )

        // DEV MODE:
        this.setState({
          weather: dummyDevData,
          loading: false,
        })
      },
      () => {
        this.setState({ loading: false })
      }
    )
  }

  render() {
    const { loading, weather } = this.state

    if (loading) {
      return null
    }

    return (
      <div>
        <h4>Current weather:</h4>
        <WeatherList>
          <li>🌤️ {weather.weather[0].description}</li>
          <li>💨 Wind speed: {weather.wind.speed}</li>
          <li>🌫️ Wind deg: {weather.wind.deg}</li>
          <li>🌡️ Temperature: {weather.main.temp}</li>
          <li>🗜️ Pressure: {weather.main.pressure}</li>
          <li>💧 Humidity: {weather.main.humidity}</li>
        </WeatherList>
      </div>
    )
  }
}

export default WeatherInfo
