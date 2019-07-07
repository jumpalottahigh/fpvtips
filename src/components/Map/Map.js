import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import Tabs from '../UI/Tabs'
import FormFPVSpot from '../UI/FormFPVSpot'
import Button from '@material-ui/core/Button'
import Dice from '@material-ui/icons/Casino'
import { earthLines } from '../../utils/svg'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'

// Setup Google Maps API key
const API_KEY = process.env.GATSBY_GOOGLE_MAPS_KEY || ''

const Loader = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;

  img {
    animation: infinite-spinning 2s infinite;
    width: 10rem;
  }

  @keyframes infinite-spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const GoogleMapContainer = styled.div`
  height: 50vh;
  width: 100%;

  @media (min-width: 1000px) {
    width: 50%;
    min-width: 50%;
  }

  @media (min-width: 1200px) {
    height: 60vh;
  }
`

const MainContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;

    .container-tabs {
      width: 50%;
      max-width: 50%;

      .MuiTab-root {
        min-width: 0;
      }
    }
  }
`
class SimpleMap extends React.Component {
  state = {
    center: {
      lat: null,
      lng: null,
    },
    loading: true,
    zoom: 11,
    mapType: 'roadmap',
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

    this.setState({ newMarker: newMarker })
  }

  _onChildClick = (key, childProps) => {
    // Create new state
    let newState = {
      center: {
        lat: parseFloat(childProps.lat),
        lng: parseFloat(childProps.lng),
      },
      currentPlace: childProps,
    }

    // Update current selected element
    this.updateSpotStateAndURL(newState)
  }

  _onChildMouseEnter = (key, childProps) => {}

  _onChildMouseLeave = () => {}

  updateSpotStateAndURL = newState => {
    // Update state to new spot
    this.setState({
      center: newState.center,
      currentPlace: newState.currentPlace,
    })

    // Add the id of the current place to the URL
    let searchParams = new URLSearchParams(`id=${newState.currentPlace.id}`)
    navigate(`${location.pathname}?${searchParams.toString()}`)
  }

  handleDiscoverNewSpot = () => {
    let id, lat, lng, randomIndex

    // Prevent selecting the same spot in a random search
    while (true) {
      // Get lat and lng from a random fpv spot
      randomIndex = Math.floor(Math.random() * this.state.markers.length)

      // Extract spot coordinates
      lat = this.state.markers[randomIndex].node.lat
      lng = this.state.markers[randomIndex].node.lng

      id = this.state.markers[randomIndex].node.id

      if (id !== this.state.currentPlace.id) break
    }

    // Create new state
    let newState = {
      center: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      },
      currentPlace: this.state.markers[randomIndex].node,
    }

    // Update state and URL
    this.updateSpotStateAndURL(newState)
  }

  loadSpotFromURL = id => {
    if (id) {
      const { markers } = this.state
      const currentPlace = markers.filter(({ node: m }) => m.id === id)[0].node

      let newState = {
        center: {
          lat: parseFloat(currentPlace.lat),
          lng: parseFloat(currentPlace.lng),
        },
        currentPlace,
      }
      // Update state and URL
      this.updateSpotStateAndURL(newState)
    } else {
      this.handleDiscoverNewSpot()
    }
  }

  handleChangeMapType = e => {
    this.setState({ mapType: e.target.value })
  }

  componentDidMount() {
    this.setState({ loading: false })

    let searchParams = new URLSearchParams(window.location.search)
    // Get id param value
    let id = searchParams.get('id')

    // If the URL contains a spot id, select that
    if (id) {
      this.loadSpotFromURL(id)
    } else {
      // Grab a new random spot
      this.handleDiscoverNewSpot()
    }
  }

  render() {
    const { center, loading, markers, zoom, mapType } = this.state

    if (loading) {
      return (
        <Loader>
          <img
            src={earthLines}
            alt="earth parallels and meridians illustration"
          />
        </Loader>
      )
    }

    return (
      <div>
        <h3>
          <span style={{ color: '#0375d8' }}>Tap the map</span>
          {` `}
          to add your spot, or {` `}
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: '0.5rem' }}
            onClick={this.handleDiscoverNewSpot}
          >
            Discover a new FPV spot
            <Dice style={{ marginLeft: '0.5rem' }} />
          </Button>
        </h3>
        <MainContainer>
          <GoogleMapContainer>
            <GoogleMapReact
              bootstrapURLKeys={{ key: API_KEY }}
              center={center}
              defaultZoom={zoom}
              onClick={this._onClick}
              onChildClick={this._onChildClick}
              onChildMouseEnter={this._onChildMouseEnter}
              onChildMouseLeave={this._onChildMouseLeave}
              options={{ mapTypeId: mapType }}
            >
              {/* Render all saved markers */}
              {markers.map(({ node: marker }) => (
                <Marker
                  key={marker.id}
                  id={marker.id}
                  lat={marker.lat}
                  lng={marker.lng}
                  title={marker.title}
                  description={marker.description}
                  features={marker.features}
                  author={marker.author}
                  authorSocialLink={marker.authorSocialLink}
                  videoLinks={marker.videoLinks}
                  photoLinks={marker.photoLinks}
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
          </GoogleMapContainer>
          {/* Tabs - pass the data about the current place down via props */}
          <Tabs currentPlaceData={this.state.currentPlace} />
        </MainContainer>
        {this.state.newMarker && (
          <FormFPVSpot
            name="submit-fpv-spot"
            contentfulType="mapMarkers"
            newMarker={this.state.newMarker}
          />
        )}
        <div style={{ display: 'flex' }}>
          <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="select-map-type">Map type</InputLabel>
            <Select
              value={this.state.mapType}
              onChange={this.handleChangeMapType}
              input={<OutlinedInput labelWidth={70} id="select-map-type" />}
            >
              <MenuItem value="roadmap">
                <ListItemText primary="Roadmap" />
              </MenuItem>
              <MenuItem value="satellite">
                <ListItemText primary="Satellite" />
              </MenuItem>
              <MenuItem value="hybrid">
                <ListItemText primary="Hybrid" />
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    )
  }
}

export default SimpleMap
