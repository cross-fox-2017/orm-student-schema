'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('Students','email',Sequelize.STRING).then(function(){
      queryInterface.addColumn('Students','phone',Sequelize.STRING).then(function(){
        queryInterface.addColumn('Students','height',Sequelize.INTEGER)
      })
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('Students','email').then(function(){
      queryInterface.removeColumn('Students','phone').then(function(){
        queryInterface.removeColumn('Students','height')
      })
    })
  }
};
