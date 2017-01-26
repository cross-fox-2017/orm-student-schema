'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          message: 'Validation Error: Phone length must be 10 - 13'
        },
        isAlpha: {
          args: false,
          message: 'Validation Error: Phone not allow letter'
        },
        isAlphanumeric: {
          args: false,
          message: 'Validation Error: Phone not allow alphanumeric'
        },
        isNumeric: true
      }
    }
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
