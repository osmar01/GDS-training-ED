const { Sequelize } = require('sequelize');

const configDatabase = require('../config/configDatabase')

const sequelize = new Sequelize(configDatabase)

module.exports = sequelize