const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
};

function newFlight(req, res) {
    res.render('flights/new' );
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // if we don't redirect, the new page will be shown with /flights
        // in the address bar
        if (err) return res.redirect('/flights/new');
        // for now, for a successfull create/save
        // let's redirect back to new.ejs
        res.redirect('/flights/new');
    });
}