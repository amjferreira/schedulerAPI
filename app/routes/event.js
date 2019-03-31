const express = require('express')
const router = express.Router()

const controller = require('../controllers/eventController')


router.get('/event', controller.findAll)

router.get('/event/:id', controller.findById)

router.post('/event', controller.insert)

router.delete('/event/:id', controller.deleteById)

router.patch('/event/:id', controller.patch)

module.exports = router;