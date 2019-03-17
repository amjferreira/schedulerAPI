const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


router.get('/users', userController.findAll)

router.get('/users/:id', userController.findById)

router.post('/users', userController.insert)

router.delete('/users/:id', userController.deleteById)

module.exports = router;