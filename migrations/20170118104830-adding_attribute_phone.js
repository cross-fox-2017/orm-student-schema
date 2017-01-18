'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Students',
      'phone',
      {
        type: Sequelize.STRING,
        allowNull: true
      })
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
      queryInterface.removeColumn({table: 'Students', schema: 'public'}, 'height')
    ]
  }
};
