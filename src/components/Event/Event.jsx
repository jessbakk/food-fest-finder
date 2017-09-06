import React from 'react';

const Event = (props) => {

  return (
    <div>
      <p>{props.event.name}</p>
      <p>{props.event.description}</p>
      <p>{props.event.photos[0]}</p>
      <img src={props.event.photos[0]} />
    </div>
  )

}

export default Event;