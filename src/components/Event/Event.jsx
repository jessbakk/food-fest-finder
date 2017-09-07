import React from 'react';
import './Event.css';

const Event = (props) => {

  return (
          <div className="card">
            <img className="card-img-top" src={props.event.photos[0]} className="img-thumbnail" alt="" />
            <div className="card-block">
              <h3 className="card-text">{props.event.name}</h3>
              <p className="card-text">{props.event.description}</p>
            </div>
          </div>
  )
}

export default Event;