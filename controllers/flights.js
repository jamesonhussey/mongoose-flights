const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight', errorMsg: ''})
}

async function index(rew, res) {
    const flights = await Flight.find({})
    res.render('flights/index', { title: "All Flights", flights })
}

async function create(req, res) {
    try {
        await Flight.create(req.body)
        res.redirect('flights')
    } catch(err) {
        console.log(err)
        res.render('flights/new', {errorMsg: err.message})
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    const ticket = await Ticket.find({'flight':req.params.id})
    console.log(ticket)
    res.render('flights/show', {
        title: 'Flight Details',
        flight,
        ticket,
    })
}