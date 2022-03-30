const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controllers')

router.get('/', controller.getUser)
router.post('/', controller.postUser)
router.post('/signUp', controller.signUp)
router.post('/signIn', controller.signIn)

module.exports = router;