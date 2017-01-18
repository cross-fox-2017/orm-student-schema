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
     queryInterface.addColumn('Students', 'createdAt', {type: Sequelize.DATE}),
     queryInterface.addColumn('Students', 'updatedAt', {type: Sequelize.DATE})
   ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return [
     queryInterface.removeColumn('Students','createAt'),
     queryInterface.removeColumn('Students','updateeAt')
   ]
  }
};
