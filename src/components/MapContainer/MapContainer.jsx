import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.css';


export class MapContainer extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div id="map-container">
        <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={'Current Location'} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: "AIzaSyDPhY5RPRnHCJqNcFBxKlQb7r0PdUmiXZI"}) (MapContainer)