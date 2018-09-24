import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import Tabs from '../UI/Tabs'
class SimpleMap extends React.Component {
  state = {
    center: {
      lat: 33.749, // Helsinki: 60.16
      lng: 84.388, // Helsinki: 24.93
    },
    loading: true,
    zoom: 11,
    markers: this.props.markers,
    currentPlace: {
      ...this.props.markers[0].node,
    },
  }

  _onChildClick = (key, childProps) => {
    console.log('Marker clicked')
    console.log(childProps)
    // Update current selected element
    this.setState({
      currentPlace: childProps,
    })
  }

  _onChildMouseEnter = (key, childProps) => {
    // console.log('Marker mouse enter')
    // const markerId = childProps.marker.get('id')
    // const index = this.props.markers.findIndex(m => m.get('id') === markerId)
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(index)
    // }
  }

  _onChildMouseLeave = () => {
    // console.log('Marker mouse leave')
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
      <div style={{ height: '100vh' }}>
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
                id={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                label={marker.label}
                description={marker.description}
                videoLinks={marker.videoLinks}
                isHighlighted={
                  marker.id == this.state.currentPlace.id ? 'true' : 'false'
                }
                zIndex={1}
              />
            ))}
          </GoogleMapReact>

          {/* Tabs - pass the data about the current place down via props */}
          <Tabs currentPlaceData={this.state.currentPlace} />
        </div>
      </div>
    )
  }
}

export default SimpleMap
