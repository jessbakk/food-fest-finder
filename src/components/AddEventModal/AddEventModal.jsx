import React from 'react';
import {Button, Modal } from 'react-bootstrap';

const AddEventModal = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
     this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="addevent" />
    )
  }

});

