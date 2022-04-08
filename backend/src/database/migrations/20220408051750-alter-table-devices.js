'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addConstraint('devices', {
      fields: ['category_id'],
      type: 'foreign key',
      references: {
        table: 'categories',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeConstraint('devices', {
      fields: ['category_id'],
      type: 'foreign key',
      references: {
        table: 'categories',
        field: 'id'
      }
    });

    
  }
};
