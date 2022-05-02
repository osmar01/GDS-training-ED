
const express = require('express')
const CategoryController = require('../controllers/categoryController');

categoryController = new CategoryController();

const router = express.Router()

router.get('/', categoryController.filter)

router.get('/:id', categoryController.getById)

router.post('/', categoryController.create)

router.put('/:id', categoryController.update)

router.delete('/:id', categoryController.delete)

module.exports = router