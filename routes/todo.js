const express = require('express');
const app = express()
const port = 3000
const router = express.Router();
const db = require('../config/db')
const controller = require('../controllers/todo.controllers')
// const controllers = require('../controllers/location.controllers')
const locationRoutes = require('../data/location')

router.use(express.json())

router.get('/', controller.getTodo)
router.post('/', controller.postTodo)
router.put('/:id', controller.updateTodo)
router.delete('/delete/:id', controller.deleteTodo)

// router.get('/:provinceName', controllers.getProvinceName)
// router.get('/:count', controllers.getCitiesNameByWordCount)
// router.get('/:cityName', controllers.getProvinceByCityName)


module.exports = router;