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
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Event Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Description" value={this.state.description} onChange={(e) => this.handleChange('description', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Month" value={this.state.month} onChange={(e) => this.handleChange('month', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Day(s)" value={this.state.day} onChange={(e) => this.handleChange('day', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Year" value={this.state.year} onChange={(e) => this.handleChange('year', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Day(s) of the Week" value={this.state.dayOfWeek} onChange={(e) => this.handleChange('dayOfWeek', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Time" value={this.state.time} onChange={(e) => this.handleChange('time', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Location" value={this.state.location} onChange={(e) => this.handleChange('location', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="City" value={this.state.city} onChange={(e) => this.handleChange('city', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Cost($)" value={this.state.cost} onChange={(e) => this.handleChange('cost', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Website" value={this.state.website} onChange={(e) => this.handleChange('website', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Photos (url)" value={this.state.photos} onChange={(e) => this.handleChange('photos', e)} />
            </div>
          </div>
                    
          <input type="submit" value="Submit" />

          <Link to='/events'>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default AddEventForm;