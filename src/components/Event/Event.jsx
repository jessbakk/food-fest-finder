import React from 'react';
import './Event.css';

const Event = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-9">
          <div className="card">
        <img className="card-img-top" src={props.event.photos[0]} className="img-thumbnail" alt="" />
        <div className="card-block">
        <p className="card-text">{props.event.name}</p>
        <p className="card-text">{props.event.description}</p>
        <p className="card-text">{props.event.photos[0]}</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )

}

export default Event;