const express = require('express');
const app = express()
const port = 3000
const router = express.Router();
const db = require('../config/db')
const todoController = require('../controllers/todo.controllers')

router.use(express.json())

router.get('/', todoController.getTodo)
router.post('/', todoController.postTodo)
router.put('/:id', todoController.updateTodo)
router.delete('/delete/:id', todoController.deleteTodo)

module.exports = router;