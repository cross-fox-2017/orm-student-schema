'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Student.find({
              where: {email: value},
              attributes: ['id']
          })
              .done(function(user) {
                  // if (error)
                  //     // Some unexpected error occured with the find method.
                  //     return next('Email address already in use!');
                  if (user)
                      // We found a user with this email address.
                      // Pass the error to the next method.
                      return next('Email address already in use!');
                  // If we got this far, the email address hasn't been used yet.
                  // Call next with no arguments when validation is successful.
                  next();
              });
       }
     }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: "Validation error: Phone length must be 10 - 13"
        },
        isNumeric: {
          args: true,
          msg: "Validation error: Phone not allow letters"
        },
        isAlphanumeric: {
          args: false,
          msg: "Validation error: Phone not allow alphanumeric"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(cb) {
        Student.findAll().then(function(data){
          let temp = []
          data.forEach(function(item){
            temp.push({
              id:item.id,
              first_name: item.first_name,
              last_name:item.last_name,
              full_name: item.getFullName(),
              birthdate: item.birthdate,
              age: item.getAge()
            })
          })
          cb(temp)
        });
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function() {
        var ageDif =  Date.now() - this.birthdate.getTime();
        var ageDate = new Date(ageDif);
        return Math.abs(ageDate.getUTCFullYear() -1970);
      }
    }
  });
  return Student;
};
