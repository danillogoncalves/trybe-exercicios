const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const Author = require('./controllers/Authors');
const errorMiddleware = require('./middlewares/error')

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
