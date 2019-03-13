var model = require('../models/userModel.js');


const findAll = function (req, res) {

  model.then(function (vals) {
    res.send(vals)
  }).catch(function (error) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  })
}

const findById = function (req, res) {

  try {
    res.send("user select is: " + req.params.id)
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = { findAll, findById }