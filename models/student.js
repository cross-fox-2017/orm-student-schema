'use strict';
module.exports = function(sequelize, DataTypes){
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    height:{
     type:DataTypes.INTEGER,
     validate:{
       min:150,
       isNumeric:true
     }
   },
    phone: {
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[10,13],
          msg:"Validation error : Phone length must be 10-13"
        },
        isNumeric:{
          args:true,
          msg:"Validation error : Phone not allow letters"
        },
        isAlphanumeric:{
          args:false,
          msg:"Valdation error : Phone not allow alphanumeric"
        }
    }
  },
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail: true,
        unique:  function (value, next) {
          Student.find({
            where:{email:value},
            attributes:['id']
          }).done(function(user) {
            if (user) {
              return next('Email address already exist!')
            }
            next()
          })
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll().then(function(data) {
          callback(data)
        })
      }
    },
      instanceMethods:{
        getFullName: function() {
          return `${this.first_name} ${this.last_name}`
        },

        getAge: function () {
        let age = new Date(this.birth_date)
        return Math.floor((Date.now() - age) / 31540000000 )
      }
      }
    })
      return Student;
    }
