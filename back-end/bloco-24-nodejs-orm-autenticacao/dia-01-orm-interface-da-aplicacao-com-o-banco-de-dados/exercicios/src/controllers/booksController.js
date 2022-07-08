const booksService = require('../services/booksService');

const booksController = {
  findAll: async (_req, res) => {
    const result = await booksService.findAll();
    res.status(200).json(result);
  },
  findByPk: async (req, res) => {
    const { id } = req.params;
    const result = await booksService.findByPk(id);
    if (result.error) return res.status(result.error.code).json({ message: result.error.message });
    res.status(200).json(result);
  },
  create: async (req, res) => {
    const result = await booksService.create(req.body);
    res.status(201).json(result);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const result = await booksService.update({ title, author, pageQuantity }, id);
    if (result.error) return res.status(result.error.code).json({ message: result.error.message });
    res.status(201).json({ message: 'Book updated!' })
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const result = await booksService.destroy(id);
    if (result.error) return res.status(result.error.code).json({ message: result.error.message })
    res.status(204).end();
  },
};

module.exports = booksController;