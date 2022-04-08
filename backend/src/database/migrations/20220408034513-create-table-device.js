'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('devices', {
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
      },
      color: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      partNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('devices');

  }
};
