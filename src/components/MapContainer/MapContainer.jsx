import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      <Marker onClick={this.onMarkerClick} name={'Current Location'} />
     
    </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey: "AIzaSyDPhY5RPRnHCJqNcFBxKlQb7r0PdUmiXZI"}) (MapContainer)