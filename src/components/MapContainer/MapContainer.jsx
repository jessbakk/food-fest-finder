import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      showingInfoWindow: false,
      activeMarker: {},
      selectedEvent: {}
    }
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      <Marker onClick={this.onMarkerClick} name={'Current Location'} />
     
    </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey: process.env.GOOGLEKEY}) (MapContainer)