var User = require('../models/User');
var CalendarController = require('./calendarController')

const UserController = {

  findAll: (req, res) => {

    User.findAll()
      .then(function (vals) {
        res.send(vals)
      })
      .catch(err => {
        console.log(err.message)
        res.sendStatus(500)
      })
  },

  findById: (req, res) => {

    User.findByPk(req.params.id).then((val) => {
      if (val != null)
        res.send(val)
      else
        res.status(404).end()
    }).catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
  },

  deleteById: (req, res) => {

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
  },


  insert: (req, res) => {

    //@todo at user insert, also create a default calendar.
    let user = { firstname, lastname, email } = req.body
    User.create(user)
      .then((entry) => {
        res.append('id', entry.id).sendStatus(201)
      })
      .then(() => {
        CalendarController.insert

      }).catch(err => {
        console.log(err.message)
        res.sendStatus(500)
      })

  },


  patch: (req, res) => {

    let user = {}

    for (b in req.body) {
      user[b] = req.body[b]
    }
    console.log("\nUser is: \n", user)

    User.update(user, { where: { id: req.params.id } })
      .then(() => {
        res.sendStatus(200)
      }).catch(err => {
        console.log(err.message)
        res.sendStatus(500)
      })
  }
}

module.exports = UserController