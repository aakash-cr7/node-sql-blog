const Sequelize = require('sequelize');
const db = require('../config/sequelize');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true
  // },
  // password: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },
});

module.exports = User;