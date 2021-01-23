const express = require('express');
const app = express();
const productRoute = require('./product');

app.use('/product', productRoute);

module.exports = app;