var User = require('../models/userModel.js');


const findAll = (req, res) => {

  User.findAll()
    .then(function (vals) {
      res.send(vals)
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500) 
    })
}

const findById = (req, res) => {

  User.findByPk(req.params.id).then((val) => {
    res.send(val)
  }).catch(err => {
    console.log(err.message)
    res.sendStatus(500) 
  })
}

const deleteById = (req, res) => {

  User.destroy(
    {
      where: { id: req.params.id }
    }
  ).then(() => {
    res.send("deleted")
  }).catch(err => {
    console.log(err.message)
    res.sendStatus(500) 
  })
}
/*
const insert = (req, res) => {
  User.insert({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email }).then((val) => {
    res.send(val)
  }).catch(err => {
    console.log(err.message)
    res.sendStatus(500) && next(error)
  })
}
*/

module.exports = { findAll, findById, deleteById }