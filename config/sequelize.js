const Sequelize = require('sequelize');

// DB, USERNAME, PASSWORD
const DB = 'blog';
const USERNAME = 'admin';
const PASSWORD = 'admin';
const db = new Sequelize(DB, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 2
  }
});

module.exports = db;