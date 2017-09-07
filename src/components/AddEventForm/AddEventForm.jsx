import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import tokenService from '../../utils/tokenService';

class AddEventForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      description: '',
      month: '',
      day: [''],
      year: '',
      dayOfWeek: [''],
      time: '',
      location: '',
      city: '',
      cost: '',
      website: '',
      photos: ['']
    }
  }
  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault() 
    fetch('api/events/addevent', {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'Bearer ' + tokenService.getToken(),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
    .then(response => {
      this.props.history.push('/');
    })
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>Event Name</label>
          <input value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
          <label>Description</label>
          <input value={this.state.description} onChange={(e) => this.handleChange('description', e)} />
          <label>Month</label>
          <input value={this.state.month} onChange={(e) => this.handleChange('month', e)} />
          <label>Day(s)</label>
          <input value={this.state.day} onChange={(e) => this.handleChange('day', e)} />
          <label>Year</label>
          <input value={this.state.year} onChange={(e) => this.handleChange('year', e)} />
          <label>Day(s) of the Week</label>
          <input value={this.state.dayOfWeek} onChange={(e) => this.handleChange('dayOfWeek', e)} />
          <label>Time</label>
          <input value={this.state.time} onChange={(e) => this.handleChange('time', e)} />
          <label>Location</label>
          <input value={this.state.location} onChange={(e) => this.handleChange('location', e)} />
          <label>City</label>
          <input value={this.state.city} onChange={(e) => this.handleChange('city', e)} />
          <label>Cost</label>
          <input value={this.state.cost} onChange={(e) => this.handleChange('cost', e)} />
          <label>Website</label>
          <input value={this.state.website} onChange={(e) => this.handleChange('website', e)} />
          <label>Photos</label>
          <input value={this.state.photos} onChange={(e) => this.handleChange('photos', e)} />
          
          <input type="submit" value="Submit" />

          <Link to='/events'>Cancel</Link>
        </form>
      </div>
    );
  }
}



export default AddEventForm;