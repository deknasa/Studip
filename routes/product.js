const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controllers')

router.post('/:id', controller.postProduct)
router.get('/', controller.getProduct)
router.get('/getProductByUserId/:id', controller.getProductByUserId)


module.exports = router;