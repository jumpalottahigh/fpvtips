import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

class SimpleMap extends React.Component {
  state = {
    center: {
      lat: 33.749, // Helsinki: 60.16
      lng: 84.388, // Helsinki: 24.93
    },
    loading: true,
    zoom: 11,
    markers: this.props.markers,
  }

  _onChildClick = (key, childProps) => {
    // TODO: on click:
    // - expand with all info
    // - add button to open modal and submit video URL

    console.log('Marker clicked')
    console.log(key)
    console.log(childProps)
    // const markerId = childProps.marker.get('id')
    // const index = this.props.markers.findIndex(m => m.get('id') === markerId)
    // if (this.props.onChildClick) {
    //   this.props.onChildClick(index)
    // }
  }

  _onChildMouseEnter = (key, childProps) => {
    console.log('Marker mouse enter')
    // const markerId = childProps.marker.get('id')
    // const index = this.props.markers.findIndex(m => m.get('id') === markerId)
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(index)
    // }
  }

  _onChildMouseLeave = () => {
    console.log('Marker mouse leave')
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(-1)
    // }
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
    const { center, loading, markers, zoom } = this.state

    if (loading) {
      return null
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
        >
          {markers.map(({ node: marker }) => (
            <Marker
              key={marker.id}
              lat={marker.lat}
              lng={marker.lng}
              label={marker.label}
              description={marker.description}
              videoLinks={marker.videoLinks}
            />
          ))}
          {/* <Marker lat={60.295} lng={25.306} text={'FPV 1'} />
          <Marker lat={60.288} lng={25.317} text={'FPV 2'} />
          <Marker lat={60.3933} lng={25.607} text={'FPV 3'} /> */}
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
