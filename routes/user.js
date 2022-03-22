const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controllers')

router.get('/', controller.getUser)
router.post('/', controller.postUser)

module.exports = router;