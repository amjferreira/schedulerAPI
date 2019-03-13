var model = require('../models/user.js');


console.log("inside controller1")

exports.findAll = (req,res) => {

    model.
    //this should connect to the database.
    res.send("all users are sent here")
}

exports.findById = (req, res) => {
    console.log("inside controller")
    //this should connect to the database.
    res.send("one calendar should be sent here")
}