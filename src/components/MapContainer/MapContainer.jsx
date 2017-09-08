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
          initialCenter={{lat: 33.851029, lng: -118.567200}}
          google={this.props.google} zoom={10}>
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Alex\'s Lemonade Fundraiser'}
          position={{lat: 34.072879, lng: -118.441136}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Terranea\'s Celebration of Food & Wine'}
          position={{lat: 33.736812, lng: -118.397891}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Orange International Street Fair'}
          position={{lat: 33.787650, lng: -117.852241}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Savor Santa Ana'}
          position={{lat: 33.747949, lng: -117.867613}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'The Bloody Mary Festival'}
          position={{lat: 34.059562, lng: -118.345246}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Cocktails in the City'}
          position={{lat: 34.044639, lng: -118.251799}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Battle of the Burger'}
          position={{lat: 34.0563799, lng: -118.239724}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'DECADENCE'}
          position={{lat: 33.677995, lng: -117.840313}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Eat Uptown Food Festival'}
          position={{lat: 33.980343, lng: -118.036466}}
        />
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Los Angeles Donut Festival'}
          position={{lat: 34.076859, lng: -118.288589}}
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