const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');

app.get('/test', async (_req, res) => {
  res.status(200).json({ message: 'Teste'});
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findById(id);
  if (authors.length === 0) return res.status(400).json({ message: 'Author ID not found.' })
  res.status(200).json(authors);
});

app.listen(port, () => console.log('Example app listenig on port port!'));
