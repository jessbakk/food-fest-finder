import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import EventsData from '../../components/EventsData/EventsData';
import MapContainer from '../../components/MapContainer/MapContainer';


 const EventsPage = (props) => {

  return (
    <div>
      <NavBar 
      user={props.user} 
      handleLogout={props.handleLogout}
      />
      <MapContainer />
      <EventsData />
    </div>
  );
}



export default EventsPage;