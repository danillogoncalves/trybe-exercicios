const connection = require('./connection');

const isValidad = (first_name, last_name, email, password) => {
  if (!first_name) return { error: true, message: 'O campo \"first_name\" é obrigatório!'};
  if (!last_name) return { error: true, message: 'O campo "last_name" é obrigatório!'};
  if (!email) return { error: true, message: 'O campo "email" é obrigatório!'};
  if (!password) return { error: true, message: 'O campo "password" é obrigatório!'};
  if (password.length < 6) return { error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres'};
  return { error: false };
};

const createUser = async (first_name, last_name, email, password) => {
  const SQL = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const [{insertId}]  = await connection.execute(
    SQL,
    [first_name, last_name, email, password]
  )

  return insertId;
}

module.exports = {
  createUser,
  isValidad
}