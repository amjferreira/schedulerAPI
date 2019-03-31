const express = require('express')
const router = express.Router()

const controller = require('../controllers/eventTypeController')


router.get('/event-types', controller.findAll)

router.post('/event', controller.insert)

router.delete('/event/:id', controller.deleteById)

module.exports = router;