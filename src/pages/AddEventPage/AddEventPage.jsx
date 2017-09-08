import React from 'react';
import AddEventForm from '../../components/AddEventForm/AddEventForm';
import NavBar from '../../components/NavBar/NavBar';


const AddEventPage = (prop) => {
  return (
    <div className="container">
      <div className="row">
        <NavBar />
        <br />
        <h1>Add Event</h1>
        <AddEventForm />
      </div>
    </div>
  )
}

  export default AddEventPage;