var router = require('express').Router();
var Event = require('./../models/event');

function getAllEvents(req, res) {
  Event.find({}, (err, events) =>{
    res.status(200).json(events)
  });
}

function addNewEvent(req, res) {
  var event = new Event(req.body);
  event.save( (err) => {
    res.status(201).json(event)
  });
}

module.exports = {
  getAllEvents,
  addNewEvent
}