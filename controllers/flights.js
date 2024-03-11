const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''})
}


//Says Flight.create is not a function
async function create(req, res) {
    try {
        await Flight.create(req.body)
        res.redirect('flights/new')
    } catch(err) {
        console.log(err)
        res.render('flights/new', {errorMsg: err.message})
    }
}