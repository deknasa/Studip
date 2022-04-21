const express = require('express')
const router = express.Router()
const locationController = require('../controllers/location.controllers')

router.get('/getProvinceName', locationController.getProvinceName)
router.get('/getCitiesNameByWordCount', locationController.getCitiesNameByWordCount)
router.get('/getProvinceByCityName', locationController.getProvinceByCityName)


module.exports = router