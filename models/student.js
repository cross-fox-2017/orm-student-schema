'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: {args: true, msg: "email is not valid"},
        equals: {args:function(err,value){
          Student.find({where:{email:value}})
          .done(error,email){
            if(error){
              console.log(error);
            }
            if(email){
              return email
            }
          }
        },msg: "email is exist"}
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
        len: {args: [10,13], msg: "number beatween 10 - 13"},
        isNumeric: {args:true, msg: "only numeric allowed"},
        isAlpha:{args:false, msg: "letters isnt allowed"}
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
        let date = new Date(this.birthday)
        return(Math.floor((Date.now() - date) / 31365000000));
      }

    }
  });
  return Student;
};
