const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

require('dotenv').config();

let localDevMySQLDbOptions = {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
}

let remoteMySQLDbOptions = {
  dialect: 'mysql',
  port: 3306,
  database: process.env.CLEARDB_DATABASE_DB_NAME
}

// create connection to our db
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.CLEARDB_DATABASE_URL, remoteMySQLDbOptions)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, remoteMySQLDbOptions);

// const sequelize = 
//   new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });

try {
  async function dbCheck() { await sequelize.authenticate(); }
  dbCheck();

  // check test table
  const testQuery = sequelize.query("SELECT * FROM `test_table`", { type: QueryTypes.SELECT }).then((result) => console.log(` test query result ${JSON.stringify(result)}`));

  console.log('Sequelize connection has been established successfully.');
} catch (error) {
  console.error('Sequelize was unable to connect to the database:', error);
}
module.exports = sequelize;
