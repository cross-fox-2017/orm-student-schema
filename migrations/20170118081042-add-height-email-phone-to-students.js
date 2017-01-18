'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn(
        'Students',
        'height',
      Sequelize.INTEGER
    ),

      queryInterface.addColumn(
      'Students',
      'email',
      Sequelize.STRING
    ),

    queryInterface.addColumn(
      'Students',
      'phone',
      Sequelize.STRING
    )];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn('Students', 'height'),
      queryInterface.removeColumn('Students', 'email'),
      queryInterface.removeColumn('Students', 'phone')
    ];
  }
};
