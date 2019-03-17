var model = require('../models/calendarModel');

exports.findAll = (req,res) => {

    
    //this should connect to the database.
    res.send("all users are sent here")
}

exports.findById = (req, res) => {
    console.log("inside controller")
    //this should connect to the database.
    res.send("one calendar should be sent here")
}