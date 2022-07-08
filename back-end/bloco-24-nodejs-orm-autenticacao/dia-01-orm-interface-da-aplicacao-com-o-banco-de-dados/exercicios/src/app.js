const express = require('express');
const booksRoute = require('./router/booksRoute');

const app = express();

app.use(express.json());

app.use('/books', booksRoute);

module.exports = app;