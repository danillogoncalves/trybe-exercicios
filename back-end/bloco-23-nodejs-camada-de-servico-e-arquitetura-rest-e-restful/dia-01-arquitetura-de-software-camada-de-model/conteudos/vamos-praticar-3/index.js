const express = require('express');
const bodyParse = require('body-parser');
const app = express();

app.use(bodyParse.json());

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

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;
  const numberAuthorId = Number(authorId);
  const result = await Book.isValidad({title, author_id: numberAuthorId});
  if (!result) return res.status(400).json({ message: 'Dados inválidos' });
  await Book.createNewBook({ title, author_id: numberAuthorId });

  res.status(201).json({ message: 'Livro criado com sucesso!' })
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));