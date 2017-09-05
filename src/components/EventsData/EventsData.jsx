import React, {Component} from 'react';

class EventsData extends Component {
  constructor() {
    super();
  }

render() {
    return (
      <div>
        <h3>Event Name</h3>
        <p>Date</p>
        <p>Description</p>
        <p>Location</p>
      </div>
    );
  }
}


export default EventsData;