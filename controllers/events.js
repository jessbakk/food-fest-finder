var Event = require('./../models/event');

function getAll() {
  Event.find({}, (err, users) =>{
    res.status(200).json(events)
  });
}

module.exports = {
  getAll
}