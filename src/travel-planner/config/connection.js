const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

require('dotenv').config();

// sequelize options for mysql on this machine
const localDevMySQLDbOptions = {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  username: process.env.DB_USER
}

// sequelize options for cleardb
const remoteMySQLDbOptions = {
  dialect: 'mysql',
  port: 3306,
  database: process.env.CLEARDB_DATABASE_DB_NAME
}

let dbUrl;
let dbOptions;

// Assign db based on env variable

if (process.env.NODE_ENV == 'development') {
  dbUrl = process.env.LOCAL_DB_URL;
   dbOptions = localDevMySQLDbOptions;
  console.log(`Current enviroment: ${process.env.NODE_ENV} so the local MySQL will be used.`);
} else {
  dbUrl = process.env.CLEARDB_DATABASE_URL;
  dbOptions = localDevMySQLDbOptions;
  console.log(`Current enviroment: ${process.env.NODE_ENV} so the  ClearDb will be used.`);
}

// create seqeulize instance
const sequelize = new Sequelize(dbUrl, dbOptions);


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
