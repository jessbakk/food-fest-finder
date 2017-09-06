import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EventsData extends Component {
  constructor(props) {
    super(props);
    this.state={}
  };
  
  componentDidMount = () => {
    this.fetchEvents();
  }

  fetchEvents = () => {
    console.log('fetching data EventsData.jsx');
      return fetch('/api/events/', {
        method: 'GET'
      })
      .then(res => res.json())
      .then(events => {
       this.setState({events})
     })
  } 



  render() {  
    return (
      <div className="container">
        <p>data</p>
      </div>
    );
};
}

export default EventsData;