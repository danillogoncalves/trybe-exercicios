const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'exersice_23_1',
  port: 3307
});

module.exports = connection;