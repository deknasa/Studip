const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controllers')
const verify = require('../middleware/auth').verify

router.post('/', verify, controller.postProduct)
router.get('/', controller.getProduct)
router.get('/getProductByUserId/:id', verify, controller.getProductByUserId)


module.exports = router;