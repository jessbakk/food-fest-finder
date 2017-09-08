import React, {Component} from 'react';
import Event from '../Event/Event';
import './EventsData.css';

class EventsData extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  };
  
  componentDidMount = () => {
    this.fetchEvents();
  }

  fetchEvents = () => {
      return fetch('/api/events/', {
        method: 'GET'
      })
      .then(res => res.json())
      .then(events => {
        this.setState({events})
     })
  } 

  render() {  
    console.log('rendering, this.state =', this.state)
    var eventList;
    if (this.state.events && this.state.events.length > 0) {
      eventList = this.state.events.map((event) => {
        return <Event key={event._id} event={event}/>
      })
    } else {
      eventList= <div>loading</div>
    }

    console.log('eventList =', eventList)
    
    return (
    <div>  
      <div id="events-container">
      <div id="event-title">Events</div>
        {eventList} 
      </div>
    </div>
    );
  };
}

export default EventsData;