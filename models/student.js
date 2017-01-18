'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email:  {
          type: DataTypes.STRING,
          validate: {
            isEmail: { msg : "Format Email is not Validate !"},
            isUniqued : function(value,next) {

                      Student.findAll({
                        where:{email: value}

                      }).done(function(data){
                          if(data.length>0){
                            return next("Email Already Exist")
                          }
                          return next();
                      })
            }
          }
        },

    height: {
      type: DataTypes.INTEGER,
      validate:{
        isInt : true,
         min  :{ args : 150, msg : "Minimum Height 150cm"}
      }
    },

    phone: {
        type     : DataTypes.INTEGER,
        validate : {
            len       : { args : [10,13], msg : "PHONE MUST BE 10 - 13 digit" },
            isNumeric : { msg  : "Phone is not Allowed alpanumeric" },
            not       : { args : ["[a-z]",'i'], msg : "Phone not Allow Letters"}
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback){
          Student.findAll().then(function(data){
                  callback(data)
          })

      }
    },
    instanceMethods: {
      getFullName: function() {
        return (this.first_name+" "+this.last_name)
      },
      getAge: function(){
        let date = new Date(this.birthdate)
        return(Math.floor((Date.now() - date)/ 31536000000))
      }
  }

  });
  return Student;
};
