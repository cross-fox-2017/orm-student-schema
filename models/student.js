'use strict';

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname : DataTypes.STRING,
    lastname  : DataTypes.STRING,
    birthdate : DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, callback) {
          Student.find({
              where     : {email: value},
              attributes: ['id']
          })
          .done(function(user) {
            if (user)
            return callback('Your email has already in use!');
            callback();
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
          args    : [10,13],
          messages: "Phone length must be 10 - 13"
        },
        isNumeric: {
          args    : true,
          messages: "Phone not allow letters"
        },
        isAlphanumeric: {
          args    : false,
          messages: "Phone not allow alphanumeric"
        }
      }
    }
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll().then(function(data){
          let temp = []
          data.forEach(function(item){
            temp.push({
              id:item.id,
              firstname : item.firstname,
              lastname  : item.lastname,
              fullname  : item.getFullName(),
              birthdate : item.birthdate,
              age       : item.getAge()
            })
          })
          callback(temp)
        });
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.firstname} ${this.lastname}`
      },
      getAge: function() {
        let age = new Date(this.birthdate)
        return Math.floor((Date.now() - age) / 31365000000)
      }
    }
  });
  return Student;
};
