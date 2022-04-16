
const express = require('express')
const DeviceController = require('../controllers/deviceController')

const router = express.Router()

router.get('/', DeviceController.filter)

router.get('/:id', DeviceController.getById)

router.post('/', DeviceController.create)

router.put('/:id', DeviceController.update)

router.delete('/:id', DeviceController.delete)

module.exports = router