function validateWarrantyPeriod(req, res, next) {
  const { infos: { warrantyPeriod } } = req.body;

  if (!warrantyPeriod) return res.status(400).json({ message: 'O campo warrantyPeriod é obrigatório' });

  if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json({ message: 'O campo warrantyPeriod não é um período válido' });
  }

  next();
}

module.exports = validateWarrantyPeriod;
