const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controllers')
const verify = require('../middleware/auth').verify

router.post('/', verify, ProductController.postProduct)
router.get('/', ProductController.getProduct)
router.get('/getProductByUserId/:id', verify, ProductController.getProductByUserId)


module.exports = router;