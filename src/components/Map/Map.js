import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

class SimpleMap extends React.Component {
  state = {
    center: {
      lat: 60.16,
      lng: 24.93,
    },
    loading: true,
    zoom: 11,
  }

  componentDidMount() {
    // Request user geo location
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords

        this.setState({
          center: { lat: latitude, lng: longitude },
          loading: false,
        })
      },
      () => {
        this.setState({ loading: false })
      }
    )
  }

  render() {
    const { center, loading, zoom } = this.state

    if (loading) {
      return null
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: 'calc(100vh - 152px)', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={60.295} lng={25.306} text={'FPV 1'} />
          <Marker lat={60.288} lng={25.317} text={'FPV 2'} />
          <Marker lat={60.3933} lng={25.607} text={'FPV 3'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
