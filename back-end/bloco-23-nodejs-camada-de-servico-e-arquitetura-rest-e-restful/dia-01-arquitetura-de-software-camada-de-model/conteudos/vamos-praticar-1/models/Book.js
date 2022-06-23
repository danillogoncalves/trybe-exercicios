const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id
  }
}

const getAll = async () => {
  const [ books ] = await connection.execute(
    'SELECT * FROM books;'
  )
  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const [ books ] = await connection.execute(
    `SELECT * FROM books WHERE author_id = ${authorId};`
  )
  return books.length
    ? books.map(serialize)
    : getAll();
}

module.exports = {
  getAll,
  getByAuthorId
}