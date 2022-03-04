const express = require('express')
const router = express.Router()
const controller = require('../controllers/location.controllers')

router.get('/getProvinceName', controller.getProvinceName)
router.get('/getCitiesNameByWordCount', controller.getCitiesNameByWordCount)
router.get('/getProvinceByCityName', controller.getProvinceByCityName)


module.exports = router