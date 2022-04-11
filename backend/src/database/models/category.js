
const { Sequelize } = require('sequelize');
const database = require('../database');

const Category = database.define('categories', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  }
}, { timestamps: false })

module.exports = Category