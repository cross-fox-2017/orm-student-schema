'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email : {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "EMAIL must contain @ then ."
        },
        isUnique : function(value,next){
          Student.findAll({where:{email: value}}).then(function(eh){
              if(eh.length>0){
                return next("data sudah ada")
              }
              else{
                return next();
              }
            })
          }
        }
      },
    height: {
      type: DataTypes.INTEGER,
      validate:{
        min:{
          args:150,
          msg: "Minimum height is 150"
        }
      }
    },
    phone:{
      type: DataTypes.STRING,
      validate:{
        isNumeric:{
          args:true,
          msg: "Phone not allow letters"
        },
        isAlphanumeric:{
          args:false,
          msg: "Phone not Allow alphanumeric"
        },
        len:{
          args:[10,13],
          msg: "Phone length must be 10-13 "
        }

      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(cb){
        this.findAll().then(function(data){
          cb(data)
        })
      }
    },
    instanceMethods:{
      getFullName : function(){
        return this.first_name+ " " + this.last_name
      },
      getAge : function(){
        var dn= new Date()
        var yn = dn.getFullYear()
        var y= this.birthdate.getFullYear()
        return yn-y
      }
    }

  });
  return Student;
};
