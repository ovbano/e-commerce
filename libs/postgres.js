const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'mainline.proxy.rlwy.net',
    port: 36426,
    user: 'postgres',
    password: 'bNfKkOCbHipJEGauXyXlvBUvKRRRrINt',
    database: 'railway',
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
