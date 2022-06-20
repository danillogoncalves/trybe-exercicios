const express = require('express');
const bodyParse = require('body-parser');

const validateProductName = require('./middlewares/validateProductName');
const validateInfo = require('./middlewares/validateInfo');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarrantyPeriod = require('./middlewares/validateWarrantyPeriod');

const app = express();
app.use(bodyParse.json());

app.post('/sales',
  validateProductName,
  validateInfo,
  validateSaleDate,
  validateWarrantyPeriod,
  function(_req, res) {
  res.status(201).json({ message: 'Sale created successfully!' });
});

app.listen(3001, function() {
  console.log('Aplicação ouvindo na porta 3001');
});
