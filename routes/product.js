const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product.controller');
const { upload } = require('../middleware/multerimage');

router.route('/').get( ProductController.getProducts).post(upload.single('image'), ProductController.addProduct)
router.route('/:id').get(ProductController.getProductDetailById).put(upload.single('image'), ProductController.updateProduct)


module.exports=router