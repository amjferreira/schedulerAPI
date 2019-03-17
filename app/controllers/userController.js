var model = require('../models/userModel.js');


const findAll = (req, res) => {

  model.findAll()
  .then(function (vals) {
    res.send(vals)
  })
    .catch(function (error) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    })
}

const findById = (req, res) => {

  model.findOne(req.params.id).then((val) => {
    res.send(val)
  }).catch(function (error) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  })
}

const deleteById = (req, res) => {

  model.delete(req.params.id).then((val) => {
    res.send("deleted")
  }).catch(function (error) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  })
}

const insert = (req, res) => {
  model.insert({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email}).then((val) => {
    res.send(val)
  }).catch(function (error) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  })
}


module.exports = { findAll, findById, deleteById, insert }