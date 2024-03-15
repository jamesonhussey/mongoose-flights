const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
}

async function newTicket(req,res) {
    const tickets = await Ticket.find({}).sort('flight')
    res.render('tickets/new', {title: 'Add Ticket', tickets})
}

async function create(req,res) {
    try {
        const ticket = await Ticket.create(req.body)
        ticket.flight = req.params.id
        
        await ticket.save()
        console.log(ticket)
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/flights/${req.params.id}`)
}