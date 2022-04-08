'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
