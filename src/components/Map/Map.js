import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import Tabs from '../UI/Tabs'
import SubmitForm from '../UI/SubmitForm'

const formStrings = {
  heading: 'Submit a new FPV spot',
}
class SimpleMap extends React.Component {
  state = {
    center: {
      lat: 33.749, // Helsinki: 60.16
      lng: 84.388, // Helsinki: 24.93
    },
    loading: true,
    zoom: 11,
    markers: this.props.markers,
    newMarker: null,
    currentPlace: {
      ...this.props.markers[0].node,
    },
  }

  _onClick = ({ x, y, lat, lng, event }) => {
    // Save the current clicked space to LS and state
    let newMarker = {
      lat,
      lng,
    }

    self.localStorage.setItem('newMarker', JSON.stringify(newMarker))
    this.setState({ newMarker: newMarker })
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
      // TODO: implement a loading spinner
      return <div>loading</div>
    }

    return (
      <div style={{ minHeight: '100vh' }}>
        <div style={{ height: '50vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={center}
            defaultZoom={zoom}
            onClick={this._onClick}
            onChildClick={this._onChildClick}
            onChildMouseEnter={this._onChildMouseEnter}
            onChildMouseLeave={this._onChildMouseLeave}
          >
            {/* Render all saved markers */}
            {markers.map(({ node: marker }) => (
              <Marker
                key={marker.id}
                id={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                label={marker.label}
                description={marker.description}
                features={marker.features}
                videoLinks={marker.videoLinks}
                isHighlighted={
                  marker.id == this.state.currentPlace.id ? 'true' : 'false'
                }
                zIndex={1}
              />
            ))}
            {/* Render a new marker if user clicked on the map */}
            {this.state.newMarker && (
              <Marker
                isNewMarker={true}
                lat={this.state.newMarker.lat}
                lng={this.state.newMarker.lng}
              />
            )}
          </GoogleMapReact>

          {/* Tabs - pass the data about the current place down via props */}
          <Tabs currentPlaceData={this.state.currentPlace} />
        </div>
        {this.state.newMarker && (
          <SubmitForm {...formStrings} fireNode="fpv-map" />
        )}
      </div>
    )
  }
}

export default SimpleMap
