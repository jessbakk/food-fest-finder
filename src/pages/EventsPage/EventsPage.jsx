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
      <div className="container">
        <div className="row">
          <h1>Food Festivals</h1>
          <Link to="/addevent"><span className="border">Add Event</span></Link>
          <EventsData />
        </div>
      </div>
    </div>
  );
}



export default EventsPage;