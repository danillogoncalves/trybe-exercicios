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

const isValidad = async ({ title, author_id }) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  const arrayAuthorId = await getByAuthorId(author_id);
  if (!author_id || typeof author_id !== 'number' || arrayAuthorId.length === 0) return false;

  return true;
}

const createNewBook = async ({ title, author_id }) => {
  const SQL = 'INSERT INTO books (title, author_id) VALUES (?, ?)';
  await connection.execute(
    SQL,
    [title, author_id]
  )
}

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  isValidad,
  createNewBook
}