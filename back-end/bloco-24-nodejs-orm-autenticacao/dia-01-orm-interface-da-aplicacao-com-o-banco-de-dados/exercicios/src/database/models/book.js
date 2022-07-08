const createBook = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  }, {
    tableName: 'books',
    underscored: true,
  });

  return Book;
};

module.exports = createBook;