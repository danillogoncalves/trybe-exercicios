const topSecret = (req, res) => {
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};

module.exports = topSecret;