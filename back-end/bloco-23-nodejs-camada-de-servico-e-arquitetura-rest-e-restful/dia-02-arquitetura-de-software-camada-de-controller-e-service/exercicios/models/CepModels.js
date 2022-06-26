const connection = require('./connection');

const formatCep = (cep) => {
  const CEP_REGEX = /\d{5}-d\{3}/;
  if (CEP_REGEX.test(cep)) {
    return cep.replace('-', '');
  }
  return cep;
};

const findAddressByCep = async (cep) => {
  const SQL = `SELECT * FROM cep_lookus.ceps
  WHERE cep = ?`;

  const [ceps] = await connection.execute(SQL, [formatCep(cep)]);
  return ceps[0];
};

module.exports = {
  findAddressByCep,
};
