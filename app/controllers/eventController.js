var Event = require('../models/Event');


const EventController = {

    findAll: (req, res) => {

        Event.findAll()
            .then(function (vals) {
                res.send(vals)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    },


    findById: (req, res) => {

        Event.findByPk(req.params.id).then((val) => {
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

        Event.destroy(
            {
                where: { id: req.params.id }
            }
        ).then(() => {
            res.sendStatus(201)
        }).catch(err => {
            console.log(err.message)
            res.sendStatus(500)
        })
    },


    insert: (req, res) => {

        let data = { name, description } = req.body
        Event.create(data).then((entry) => {
            res.append('id', entry.id).sendStatus(201)
        }).catch(err => {
            console.log(err.message)
            res.sendStatus(500)
        })

    },

    patch: (req, res) => {
        let event = {}

        for (b in req.body) {

            event[b] = req.body[b]
        }
        console.log("\nEvent is: \n", event)

        Event.update(event, { where: { id: req.params.id } })
            .then(() => {
                res.sendStatus(200)
            }).catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    }
}

module.exports = EventController