var express = require('express');
var router = express.Router();
var eventsCtrl = require('../../controllers/events');

router.get('/events', eventsCtrl.getAll);

module.exports = router;