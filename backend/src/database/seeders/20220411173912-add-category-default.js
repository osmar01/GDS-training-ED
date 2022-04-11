'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('categories', [
      { name: 'default category' },
      { name: 'none' }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
