const Author = require('../services/Authors');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
}

const findById = async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
}

const createAuthor = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const author = await Author.createAuthor(firstName, middleName, lastName);
  
  if (!author) res.status(400).json({ message: 'Dados inválidos' });

  res.status(201).json(author);
}

module.exports = {
  getAll,
  findById,
  createAuthor,
}