'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function (cb) {
        Student.findAll().then(function (data) {
          cb(data)
        })
      }
    },
    instanceMethods:{
      getFullName: function () {
        return `${this.firstname} ${this.lastname}`
      }
    }
  });
  return Student;
};
