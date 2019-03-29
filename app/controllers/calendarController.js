var Calendar = require('../models/Calendar');



const findAll = (req, res) => {

    Calendar.findAll()
        .then(function (vals) {
            res.send(vals)
        })
        .catch(err => {
            console.log(err.message)
            res.sendStatus(500)
        })
}

const findById = (req, res) => {

    Calendar.findByPk(req.params.id).then((val) => {
        if (val != null)
            res.send(val)
        else
            res.status(404).end()
    }).catch(err => {
        console.log(err.message)
        res.sendStatus(500)
    })
}

const deleteById = (req, res) => {

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
}


const insert = (req, res) => {

    let data = { name, description } = req.body
    Calendar.create(data).then((entry) => {
        //add header map with the resource ID
        res.append('id', entry.id).sendStatus(201)
    }).catch(err => {
        console.log(err.message)
        res.sendStatus(500)
    })

}


const patch = (req, res) => {

    let data = {}

    for (b in req.body) {

        data[b] = req.body[b]
    }
    console.log("\nuser is: \n", data)

    Calendar.update(data, { where: { id: req.params.id } })
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err.message)
            res.sendStatus(500)
        })
}


module.exports = { findAll, findById, deleteById, insert, patch }