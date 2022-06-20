const express = require('express');
const bodyParse = require('body-parser');
const crypto = require('crypto');

const authMiddleware = require('./middlewares/authMiddleware');
const validateProductName = require('./middlewares/validateProductName');
const validateInfo = require('./middlewares/validateInfo');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarrantyPeriod = require('./middlewares/validateWarrantyPeriod');

const app = express();
app.use(bodyParse.json());

app.post('/sigup',
  function(req, res) {
    try {
      const { email, password, firstName, phone } = req.body;

      if (!email, !password, !firstName, !phone) return res.status(401).json({ message: 'missing fields' });

      const token = crypto.randomBytes(8).toString('hex');

      res.status(200).json({ token });
    } catch(err) {
      return res.status(500).end();
    }
    
  });

// app.use(authMiddleware);

app.post('/sales',
  authMiddleware,
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

// POST - sales
// BODY - JSON
// {
//   "productName": "SmarTV",
//   "infos": {
//     "saleDate": "19/02/2022",
//     "warrantyPeriod": 3
//   }
// }

// POST - signup
// BODY - JSON
// {
// 	"email": "danillo@danillo.com",
// 	"password": "123aeiou",
// 	"firstName": "Danillo",
// 	"phone": 5511999998888
// }
