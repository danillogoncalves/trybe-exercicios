const connection = require('./connection');

const formatForResponse = (address) => {
  const { cep, logradouro, bairro, localidade, uf } = address;
  const formatCep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  return {
    cep: formatCep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

const formatCepDB = (cep) => {
  const CEP_REGEX = /\d{5}-\d{3}/;
  if (CEP_REGEX.test(cep)) {
    return cep.replace('-', '');
  }
  return cep;
};

const findAddressByCep = async (cep) => {
  const SQL = `SELECT * FROM cep_lookup.ceps
  WHERE cep = ?`;

  const [ceps] = await connection.execute(SQL, [formatCepDB(cep)]);

  if (!ceps[0]) return ceps[0];

  return formatForResponse(ceps[0]);
};

const createAddress = async (address) => {
  const { cep, logradouro, bairro, localidade, uf } = address;
  const newCep = formatCepDB(cep);
  const SQL = `INSERT INTO cep_lookup.ceps
  (cep, logradouro, bairro, localidade, uf)
  VALUES (?, ?, ?, ?, ?)
  `;
  await connection.execute(
    SQL,
    [newCep, logradouro, bairro, localidade, uf],
  );

  return address;
};

module.exports = {
  findAddressByCep,
  createAddress,
};
