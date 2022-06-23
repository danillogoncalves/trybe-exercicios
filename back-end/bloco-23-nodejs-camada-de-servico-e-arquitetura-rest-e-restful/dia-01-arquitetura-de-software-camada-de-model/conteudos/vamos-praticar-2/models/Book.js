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
  const SQL = 'SELECT * FROM books WHERE author_id = ?';
  const [ books ] = await connection.execute(
    SQL,
    [Number(authorId)]
  )
  return books.map(serialize);
}

const getByBookId = async (bookId) => {
  const SQL = 'SELECT * FROM books WHERE id = ?'
  const [ books ] = await connection.execute(
    SQL,
    [Number(bookId)]
  )
  return books.map(serialize);
}

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId
}