var Calendar = require('../models/Calendar');


const CalendarController = {

    findAll: (req, res) => {

        Calendar.findAll()
            .then(function (vals) {
                res.send(vals)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    },


    findById: (req, res) => {

        Calendar.findByPk(req.params.id).then((val) => {
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

        Calendar.destroy(
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


    insert: (req, res, userId = 0) => {

        console.log('user id is:',req.params.user)
        let data = { name, description } = req.body
        if (userId == 0) {
            data['user_id'] = req.params.user
        } else {
            data['user_id'] = userId
        }

        console.log('data is:',data)
        Calendar.create(data).then((entry) => {
            res.append('id', entry.id).sendStatus(201)
        }).catch(err => {
            console.log(err.message)
            res.sendStatus(500)
        })

    },

    patch: (req, res) => {
        let calendar = {}

        for (b in req.body) {

            calendar[b] = req.body[b]
        }
        console.log("\ncalendar is: \n", calendar)

        Calendar.update(calendar, { where: { id: req.params.id } })
            .then(() => {
                res.sendStatus(200)
            }).catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    }
}

module.exports = CalendarController