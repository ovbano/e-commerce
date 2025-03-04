const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: '192.168.2.104',
    port: 5432,
    user: 'espe',
    password: 'espe',
    database: 'myStore'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
