var Calendar = require('../models/Calendar');

exports.findAll = (req, res) => {

    Calendar.findAll
        .then((vals) => {
            res.send(vals)

        })
        .catch(err => {
            console.log('Error: ', err)
            res.sendStatus(500)
        });
    //this should connect to the database.
}