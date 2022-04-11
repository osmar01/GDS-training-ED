const { Sequelize } = require('sequelize')
const database = require('../database')
const Category = require('./category')

const Device = database.define('devices', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },

  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  color: {
    type: Sequelize.STRING(16),
    allowNull: false,
  },
  
  partNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

}, { timestamps: false })

Device.belongsTo(Category, 
  {
    foreignKey: 'category_id'
  });

module.exports = Device
