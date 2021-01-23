const express = require('express');
const app = express();
const productRoute = require('./product');
const productUserRoute = require('./productuser')

app.use('/product', productRoute);
app.use('/productUser', productUserRoute);

module.exports = app;