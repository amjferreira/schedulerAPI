const express = require('express')
const router = express.Router()

const controller = require('../controllers/calendarController')


router.get('/calendars', controller.findAll)

router.get('/calendars/:id', controller.findById)

router.post('/users/:user/calendars', controller.insert)

router.delete('/calendars/:id', controller.deleteById)

router.patch('/calendars/:id', controller.patch)

module.exports = router;