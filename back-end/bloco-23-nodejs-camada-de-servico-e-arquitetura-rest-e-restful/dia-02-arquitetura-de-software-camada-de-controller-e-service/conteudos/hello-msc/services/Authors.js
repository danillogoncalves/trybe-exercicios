const Author = require('../models/Authors');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return author;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const existngAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existngAuthor) {
    return {
      error: 'alreadyExists',
      message: 'Uma pessoa autora já existe com esse nome completo',
    }
  }
  return Author.createAuthor(firstName, middleName, lastName);
}

module.exports = {
  getAll,
  findById,
  createAuthor,
};