function validateSaleDate(req, res, next) {
  const { infos: { saleDate } } = req.body;
  if (!saleDate) return res.status(400).json({ message: 'O campo saleDate é obrigatório' });

  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.test(saleDate)) return res.status(400).json({ message: 'O campo saleDate não é uma data válida' });

  next();
}

module.exports = validateSaleDate;
