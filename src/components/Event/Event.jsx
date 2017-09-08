import React from 'react';
import './Event.css';

const Event = (props) => {

  return (
        <div>
          <div className="card card-styling">
            <img className="card-img-top align-center" src={props.event.photos[0]} className="img-thumbnail" alt="" />
            <div className="card-block">
              <h3 className="card-text text-center event-title">{props.event.name}</h3>
              <br />
              <p className="text-center event-details">{props.event.dayOfWeek[0]}, {props.event.month} {props.event.day[0]}, {props.event.year} </p>
              <br/>
              <p className="card-text text-center event-details">{props.event.description}</p>
            </div>
          </div>
        </div>
  )
}

export default Event;