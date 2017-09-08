import React from 'react';
import './Event.css';

const Event = (props) => {

  return (
        <div>
          <div className="card card-styling">
            <img className="card-img-top align-center" src={props.event.photos[0]} className="img-thumbnail" alt="" />
            <div className="card-block">
              <h3 className="card-text text-center">{props.event.name}</h3>
              <p className="card-text text-center">{props.event.description}</p>
            </div>
          </div>
        </div>
  )
}

export default Event;