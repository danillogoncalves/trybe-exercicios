const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].map((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

const getAll = async () => {
  const [ authors ] = await connection.execute('SELECT * FROM authors;');

  return authors.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const [ authors ] = await connection.execute(
    'SELECT * FROM authors WHERE id=?', [id]
    );
  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
  findById
};
