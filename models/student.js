'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: /\S+@\S+\.\S+/,
        isUnique: function(value, next) {
          Student.find({
              where: {email: value}
          }).then(function(error, user) {
              if (error)
                  return next(error);
              if (user)
                  return next('Email address already in use!');
              next();
          });
        }
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
          args: [10,13],
          msg: 'Phone length must be 10 - 13'
        },
        isAlphanumeric: {
          args: false,
          msg: 'Phone not allow alphanumeric'
        },
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
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
          let temp = [];
          data.forEach(function(item){
            temp.push({
              id: item.id,
              first_name: item.first_name,
              last_name: item.last_name,
              full_name: item.getFullName(),
              age: item.getAge()
            })
          })
          cb(temp)
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function() {
        let ageDifMs = Date.now() - this.birthdate.getTime();
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }
    }
  });
  return Student;
};
