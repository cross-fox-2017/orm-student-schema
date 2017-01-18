'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.changeColumn(
      "Students",
      "telepon",
      {
      type:Sequelize.STRING
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      "Students",
      "telepon",
      {
      type:Sequelize.INTEGER
      }
    )
  }
};
