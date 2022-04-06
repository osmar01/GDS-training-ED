const { Sequelize } = require('sequelize')
const database = require('../database')
const Category = require('./category')

const Device = database.define('devices', {
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
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'category',
      key: 'id'
    }
  },
  color: {
    type: Sequelize.STRING(16),
    allowNull: false,
    field: 'color'
  },
  partNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'part_number'
  },

},
  { 
    timestamps: false,
    tableName: 'Devices'
  }
)

Device.belongsTo(Category, 
  {
    constraints: true
  });

module.exports = Device
