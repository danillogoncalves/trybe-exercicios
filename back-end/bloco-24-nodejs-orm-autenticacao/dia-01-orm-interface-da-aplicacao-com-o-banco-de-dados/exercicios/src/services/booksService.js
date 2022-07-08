const { Book } = require('../database/models');

const booksService = {
  findAll: async () => {
    const result = await Book.findAll();
    return result;
  },
  findByPk: async (id) => {
    const result = await Book.findByPk(id);
    if (!result) return { error: { code: 404, message: 'Book not found' } };
    return result;
  },
  create: async (objectOfBookInfo) => {
    const result = await Book.create(objectOfBookInfo);
    return result;
  },
  update: async (objectOfBookInfo, id) => {
    const [result] = await Book.update(objectOfBookInfo, { where: { id } });
    if (!result) return { error: { code: 404, message: 'Book not found' } };
    return result;
  },
  destroy: async (id) => {
    const result = await Book.destroy({ where: { id } });
    console.log(result);
    if (!result) return { error: { code: 500, message: 'Algo deu errado' } };
    return result;
  }
};

// { where: { firstName: "Jane" } }

module.exports = booksService;