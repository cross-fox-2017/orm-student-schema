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
     queryInterface.addColumn('Students','email', {type: Sequelize.INTEGER} ),
     queryInterface.addColumn('Students','height', {type: Sequelize.INTEGER} ),
     queryInterface.addColumn('Students','phone', {type: Sequelize.INTEGER} ),
   ]
   //
  //  return queryInterface.addColumn(
  //    {'Students','email', Sequelize.STRING},
  //    {'Students','height', Sequelize.INTEGER},
  //    {'Students','phone', Sequelize.STRING}
  //  )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
