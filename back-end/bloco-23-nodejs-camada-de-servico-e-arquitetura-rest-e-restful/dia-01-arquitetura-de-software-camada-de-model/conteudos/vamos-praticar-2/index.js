const express = require('express');
const app = express();
const PORT = 3000;

const Book = require('./models/Book');

app.get('/books', async (_req, res) => {
  const result = await Book.getAll();

  res.status(200).json(result);
});

app.get('/books/search', async (req, res) => {
  const { id } = req.query;
  const result = await Book.getByAuthorId(Number(id));
  if (result.length === 0) return res.status(400).json({ message: 'Author ID not found.'});
  res.status(200).json(result);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Book.getByBookId(Number(id));
  if (result.length === 0) return res.status(400).json({ message: 'Book ID not found.'});
  res.status(200).json(result);
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));