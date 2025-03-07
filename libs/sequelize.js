const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');
const initModels = require('./../db/models');
// const USER = encodeURIComponent(config.dbUser);
// const PASS = encodeURIComponent(config.dbPass);
// const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// const sequelize = new Sequelize(URI, {
//   dialect: 'postgres',
//   logging: (msg) => console.log(msg),
// });


// Uso de variables de entorno en producción
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Importante para Railway
    },
  },
  logging: (msg) => console.log(msg),
});



initModels(sequelize);

module.exports = sequelize;
