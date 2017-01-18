'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    telepon: DataTypes.INTEGER,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      },
      getAllData : function(callBack){
        Student.findAll().then(function(data){
          callBack(data)
        })
      }
    },

    instanceMethods: {
      getFullName: function() {
        return (this.first_name + " " + this.last_name)
      },
      getAge: function(){
        let today = new Date();
        let age = today.getFullYear() - this.birthdate.getFullYear();
        let m = today.getMonth() - this.birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthdate.getDate())) {
          age--;
        }
        return age;
      }
    }

  });
  return Student;
};
