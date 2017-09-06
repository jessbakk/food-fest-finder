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
          <div className="col-xs-9">
            <h1>Food Festivals</h1>
            <EventsData />
          </div>
          <div className="col-md-8">
            map data
          </div>
        </div>
      </div>
    </div>
  );
}



export default EventsPage;