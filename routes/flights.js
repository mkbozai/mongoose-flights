var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes "start with" /movies (from server.js)

// GET /flights/new (new functionality)
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
