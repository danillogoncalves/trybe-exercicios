require('dotenv').config();
const express = require('express');
const CepControllers = require('../controllers/CepControllers');

const PORT = 3000;

const app = express();

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep/:cep', CepControllers.findAddressByCep);

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}.`));