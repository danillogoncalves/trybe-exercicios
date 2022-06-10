const express = require('express');
const bodyParse = require('body-parser');

const app = express();
app.use(bodyParse.json());

app.post('/sales', function(req, res) {
  const { productName, infos } = req.body;
  
  if (!productName) return res.status(400).json({ message: 'O campo productName é obrigatório' });
  
  if (productName.length < 4) return res.status(400).json({ message: 'O campo productName deve ter pelo menos 4 caracteres' });
  
  if (!infos) return res.status(400).json({ message: 'O campo infos é obrigatório' });

  const { saleDate, warrantyPeriod } = infos;

  if (!saleDate || !warrantyPeriod ) res.status(400).json({ message: 'O campo saleDate e warrantyPeriod é obrigatório' });

  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.test(saleDate)) return res.status(400).json({ message: 'O campo saleDate não é uma data válida' });

  res.status(201).json({ message: 'Sale created successfully!' });
});

app.listen(3001, function() {
  console.log('Aplicação ouvindo na porta 3001');
});
