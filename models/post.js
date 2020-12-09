const Sequelize = require('sequelize');
const db = require('../config/sequelize');

const Post = db.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING
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

module.exports = Post;