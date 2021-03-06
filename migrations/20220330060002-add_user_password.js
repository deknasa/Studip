'use strict';

const { query } = require("express")

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'password',
      Sequelize.STRING
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Users',
      'password'
    )
  }
};
