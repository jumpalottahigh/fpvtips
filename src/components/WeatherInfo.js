import React from 'react'
import styled from 'styled-components'

// Configure open weather map API key
const API_KEY = process.env.OPEN_WEATHER_MAP_KEY

const WeatherList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0 auto;

  li:before {
    content: '🌤️';
  }

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
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
        )
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                coords: { lat: latitude, lng: longitude },
                loading: false,
                weather: result,
              })
            },
            error => {
              this.setState({
                loading: true,
                error,
              })
            }
          )
      },
      () => {
        this.setState({ loading: false })
      }
    )
  }

  render() {
    const { coords, loading, weather } = this.state

    if (loading) {
      return null
    }

    return (
      <div>
        <h4>Current weather:</h4>
        <WeatherList>
          <li>{weather.weather[0].description}</li>
          <li>Wind speed: {weather.wind.speed}</li>
          <li>Wind deg: {weather.wind.deg}</li>
          <li>Temperature: {weather.main.temp}</li>
          <li>Pressure: {weather.main.pressure}</li>
          <li>Humidity: {weather.main.humidity}</li>
        </WeatherList>
      </div>
    )
  }
}

export default WeatherInfo
