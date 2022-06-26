const CepModels = require('../models/CepModels');

const findAddressByCep = async (cep) => {
  const CEP_REGEX = /\d{5}-?\d{3}/;
  if (!CEP_REGEX.test(cep)) {
    return {
      error: { code: 400, message: 'CEP inválido' },
    };
  }

  const resultCep = await CepModels.findAddressByCep(cep);
  if (!resultCep) {
    return {
      error: { code: 404, message: 'CEP não encontrado' },
    };
  }

  return resultCep;
};

module.exports = {
  findAddressByCep,
};
