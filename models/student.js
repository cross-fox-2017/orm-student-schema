'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: {args: true, msg: "email is not valid"},
        isUniq:  function(value,next){Student.find({where:{email:value}}).done(function(user){
          if(user){
            return next("data is exist")
          }
          next()
        })
      }
    }
  },
    height: {
      type:DataTypes.INTEGER,
      validate:{
        min: {args: 150, msg: "height must be over 150cm"}
      }
    },
    phone: {
      type:DataTypes.STRING,
      validate:{
        len: {args: [10,13], msg: "phone length must be 10 - 13"},
        isNumeric: {args:true, msg: "phone only numeric allowed"},
      }
    }
  },
    {

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(cb){
        Student.findAll().then(function(data){
          cb(data);
        })
      }
    },
    instanceMethods:{
      getFullName: function(){
        return `${this.first_name} ${this.last_name}`
      },

      getAge: function(){
        let date = new Date(this.birthdate)
        return(Math.floor((Date.now() - date) / 31365000000));
      }

    }
  });
  return Student;
};
