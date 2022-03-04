const express = require('express');
const app = express()
const port = 3000
const router = express.Router();
// const controller = require('../controllers/todo.controller')
const controllers = require('../controllers/location.controllers')
const locationRoutes = require('../data/location')

router.use(express.json())

// router.get('/', middleware.verify, controller.getTodo)
// router.post('/', controller.postTodo)
// router.delete('/', controller.deleteTodo)
router.get('/:provinceName', controllers.getProvinceName)
router.get('/:count', controllers.getCitiesNameByWordCount)
router.get('/:cityName', controllers.getProvinceByCityName)


module.exports = router;