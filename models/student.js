'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email : {
      type : DataTypes.STRING,
      validate:{
        isEmail : true,
        isUnique: function(value, next) {

                Student.find({
                    where: {email: value},
                    attributes: ['id']
                })
                    .done(function(error, user) {

                        if (error)
                            // Some unexpected error occured with the find method.
                            return next(error);

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

    height : {
      type : DataTypes.REAL,
      validate:{
        min : 150
      }
    },

    phone : {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [10,13],
          msg : "Phone length must be 10-13"
        },
        isAlphanumeric : {
          args : true,
          msg : "Phone not allow alphanumeric"
        },
        isNumeric : {
          args : true,
          msg : "Phone not allow letters"
        }
      }
    }

  }, {


    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },

      getAllData: function(cb){
        Student.findAll().then(function (data) {
          let temp = []
          data.forEach(function(item){
            temp.push({
              id : item.id,
              first_name : item.first_name,
              last_name : item.last_name,
              full_name : item.getFullName(),
              age       : item.getAge()
            })
          })
          cb(temp)
        })
      }

    },

    instanceMethods: {
      getFullName: function () {
        return `${this.first_name} ${this.last_name}`
      },
      getAge : function () {
        let today = new Date()
        let age = today.getFullYear() - this.birthdate.getFullYear()
        return age
      }
    }

  });
  return Student;

};
