'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return [ queryInterface.addColumn('Students',
      "email", {
        allowNull: true,
        type: Sequelize.STRING
      }),

      queryInterface.addColumn('Students',
      "phone", {
        allowNull: true,
        type: Sequelize.STRING
      }),

      queryInterface.addColumn('Students',
      "height", {
        allowNull: true,
        type: Sequelize.INTEGER
      })
    ]

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return[
      queryInterface.removeColumn({table: 'Students', schema: 'public'}, 'email'),
      queryInterface.removeColumn({table: 'Students', schema: 'public'}, 'height'),
      queryInterface.removeColumn({table: 'Students', schema: 'public'}, 'phone')
    ]

  }
};
