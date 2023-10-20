const mysql = require('mysql2/promise');

async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'musicas',
  });
  console.log('Conectou ao MySQL!');
  return connection;
}

module.exports = { connect };
