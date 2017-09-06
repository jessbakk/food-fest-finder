import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import EventsData from '../../components/EventsData/EventsData';


 const EventsPage = (props) => {

  return (
    <div className="container">
      <NavBar 
      user={props.user} 
      handleLogout={props.handleLogout}
      />
      <Link to='/'>Back</Link>
      <h1>Food Festivals</h1>
      <EventsData />
    </div>
  );
}



export default EventsPage;