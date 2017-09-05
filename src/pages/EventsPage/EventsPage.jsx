import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import EventsData from '../../components/EventsData/EventsData';


const EventsPage = (props) => {
  return (
  <div>
    <NavBar 
      user={props.user} 
      handleLogout={props.handleLogout}
    />
    <h1>Food Festivals</h1>
    <EventsData />
  </div>
  );
};


export default EventsPage;