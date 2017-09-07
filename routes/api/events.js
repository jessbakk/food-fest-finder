var express = require('express');
var router = express.Router();
var eventsCtrl = require('../../controllers/events');

router.get('/', eventsCtrl.getAllEvents);
router.post('/addevent', eventsCtrl.addNewEvent);

module.exports = router;