var express = require('express');
var router = express.Router();
var eventsCtrl = require('../../controllers/events');

router.get('/', eventsCtrl.getAllEvents);
router.get('/addevent');

module.exports = router;