var router = require('express').Router();
var Event = require('./../models/event');

function getAllEvents(req, res) {
  Event.find({}, (err, events) =>{
    res.status(200).json(events)
  });
}

module.exports = {
  getAllEvents
}