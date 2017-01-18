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
      },
      getAge: function () {
        let age = new Date(this.birthdate)
        return Math.floor((Date.now() - age) / 31540000000 ) 
      }
    }
  });
  return Student;
};
