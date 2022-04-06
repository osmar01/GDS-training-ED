
const { Sequelize } = require('sequelize');
const database = require('../database');

const Category = database.define('categories', {
  
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id'
  },

  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: 'name'
  }
},
  {
    timestamps: false,
    tableName: 'Categories'
  }
)

module.exports = Category