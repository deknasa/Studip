const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers')

router.get('/', userController.getUser)
router.post('/', userController.postUser)
router.post('/signUp', userController.signUp)
router.post('/signIn', userController.signIn)

module.exports = router;