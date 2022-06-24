const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = (authorData) => authorData.map((item) => getNewAuthor({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name,
}));

const getAll = async () => {
  const SQL = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  const [ authors ] = await connection.execute(SQL);
  return serialize(authors);
};

const findById = async (id) => {
  const SQL = `
    SELECT id, first_name, middle_name, last_name
    FROM model_example.authors
    WHERE id = ?
  `;

  const [ authors ] = await connection.execute(SQL, [id]);

  if (authors.length === 0) return null;
  
  return serialize(authors)[0];
};

const createAuthor = async (firstName, middleName, lastName) => {
  const SQL = `
    INSERT INTO model_example.authors (first_name, middle_name, last_name)
    VALUES (?, ?, ?)
  `;
  const [ authors ] = await connection.execute(
    SQL,
    [firstName, middleName, lastName]
    );
  
  return [getNewAuthor({ id: authors.insertId, firstName, middleName, lastName })];
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
