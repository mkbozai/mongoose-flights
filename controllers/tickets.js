const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}


function create(req, res) {
    const flightId = req.params.id
    const ticket = new Ticket(req.body);
    ticket.flight = flightId;
    ticket.save(function(err) {
        if (err) res.redirect(`/flights/${flightId}/tickets/new`)
    });
    res.redirect(`/flights/${flightId}`)
};
    
function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params.id })
};