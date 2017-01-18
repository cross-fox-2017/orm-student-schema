'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.addColumn('Students', 'email', Sequelize.STRING).then(function() {
            return queryInterface.addColumn('Students', 'tinggi_badan', Sequelize.INTEGER).then(function() {
                return queryInterface.addColumn('Students', 'phone', Sequelize.INTEGER)
            })
        })


    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');

        */
        return queryInterface.removeColumn('Students', 'email').then(function() {
            queryInterface.removeColumn('Students', 'tinggi_badan').then(function() {
                queryInterface.removeColumn('Students', 'phone')
            })
        })
    }
};
