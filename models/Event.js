var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const eventSchema = new Schema ({
  name: String,
  description: String,
  date: String,
  time: String,
  location: String,
  city: String,
  cost: Number,
  website: String
})



module.exports = mongoose.model('Event', eventSchema); 