const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: ''
});

module.exports = connection;