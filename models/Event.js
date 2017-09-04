var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const eventSchema = new Schema ({
  name: String,
  description: String,
  month: String,
  day: String,
  year: String,
  dayOfWeek: String,
  time: String,
  location: String,
  city: String,
  cost: String,
  website: String
}, {
  timestamps: true
})



module.exports = mongoose.model('Event', eventSchema); 