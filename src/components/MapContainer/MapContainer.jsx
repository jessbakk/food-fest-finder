import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.css';


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      showingInfoWindow: false,
      activeMarker: {},
      selectedEvent: {}
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedEvent: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <div id="map-container">
        <Map 
          initialCenter={{lat: 34.0522, lng: -118.2437}}
          google={this.props.google} zoom={12}>
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Current Location'} 
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h2>{this.state.selectedEvent.name}</h2>
            <h4>{this.state.selectedEvent.description}</h4>
          </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: "AIzaSyDPhY5RPRnHCJqNcFBxKlQb7r0PdUmiXZI"}) (MapContainer)