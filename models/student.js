'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
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
        },
        phone: {
          type: DataTypes.STRING,
          validate: {
            len: [10 - 13],
            isNumeric: false,
            isAlphanumeric: false
          }
        }
      }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      } ,

      getAllData: function(callback) {
        Student.findAll().then(function(students) {
          students.forEach(function(std) {
            std.full_name = `${std.first_name} ${std.last_name}`;
          })
          callback(students)
        })
      },

      getAge: function(callback) {
        Student.findAll().then(function(students) {
          students.forEach(function(std) {
            let temp = std.birthdate.toString().slice(11,15);
            let age = 2017 - Number(temp);
            std.ultah = `Umur anda saat ini ${age} tahun`;
          })
          callback(students)
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`;
      },

      passedDeadline: function() {
      return (this.deadline < new Date())
      }
    }
  });
  return Student;
};
