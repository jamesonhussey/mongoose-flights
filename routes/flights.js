var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

module.exports = router;

//GET /flights/new
router.get('/new', flightsCtrl.new)

//POST /movies
router.post('/', flightsCtrl.create)

//GET route to /flights (index)
router.get('/', flightsCtrl.index)

