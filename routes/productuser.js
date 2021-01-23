const express = require('express');
const router = express.Router();
const ProductUserController = require('../controller/productuser.controller');

router.route('/').get( ProductUserController.getProductUsers).post( ProductUserController.addProductUser)


module.exports=router