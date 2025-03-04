// const { config } = require('./../config/config');

// console.log('DB Config:', config);

// const USER = encodeURIComponent(config.dbUser || '');
// const PASS = encodeURIComponent(config.dbPassword || '');
// const HOST = config.dbHost || '';
// const PORT = config.dbPort || '5432';
// const NAME = config.dbName || '';

// console.log(`USER: ${USER}, PASS: ${PASS}, HOST: ${HOST}, PORT: ${PORT}, NAME: ${NAME}`);

// const URI = `postgres://${USER}:${PASS}@${HOST}:${PORT}/${NAME}`;

// console.log('DATABASE URI:', URI);


// module.exports = {
//   development: {
//     username: config.dbUser,
//     password: config.dbPassword,
//     database: config.dbName,
//     host: config.dbHost,
//     port: config.dbPort,
//     dialect: 'postgres',
//   },
//   production: {
//     username: config.dbUser,
//     password: config.dbPassword,
//     database: config.dbName,
//     host: config.dbHost,
//     port: config.dbPort,
//     dialect: 'postgres',
//   }
// };


const { config } = require('./../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
};
