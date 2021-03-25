const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
    try {
      async function dbCheck(){ await sequelize.authenticate();}
      dbCheck();
      console.log('Sequelize connection has been established successfully.');
    } catch (error) {
      console.error('Sequelize was unable to connect to the database:', error);
    }
module.exports = sequelize;
