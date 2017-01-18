'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    height: {
      type: DataTypes.INTEGER,
      min: 151
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value,cb) {
          Student.find({
            where: {email: value},
            attributes: ['id']
          })
            .done(function(user) {
              if (user) {
                return next ('Email address already in use')
              }
              cb();
            })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: "Validation Error: Phone length must be 10 - 13"
        },
        isNumeric: {
          args: true,
          msg: "Validation Error: Phone not allow letters"
        },
        isAlphanumeric: {
          args: false,
          msg: "Validation Error: Phone not allow alphanumeric"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      // getAllData: function(cb) {
      //   Student.findAll().then(function(data) {
      //     cb(data)
      //   })
      // }
      getAllData: function(cb) {
        Student.findAll().then(function(data) {
          let temp = []
          data.forEach(function (item) {
            temp.push({
              id: item.id,
              firstname: item.firstname,
              lastname: item.lastname,
              fullname: item.getFullName(),
              birthdate: item.birthdate,
              age: item.getAge()
            })
          })
          cb(temp)
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.firstname} ${this.lastname}`
      },
      getAge: function (birthday) {
        let ageDiff = Date.now() - this.birthdate.getTime();
        let ageDate = new Date(ageDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }
    }
  });
  return Student;
};
