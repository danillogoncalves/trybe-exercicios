const CepServices = require('../services/CepServices');

const findAddressByCep = async (req, res) => {
  const { cep } = req.params;

  const resultCep = await CepServices.findAddressByCep(cep);

  if (resultCep.error) {
    const { code, message } = resultCep.error;
    return res.status(code).json({ message });
  }

  return res.status(200).json(resultCep);
};

module.exports = {
  findAddressByCep,
};
