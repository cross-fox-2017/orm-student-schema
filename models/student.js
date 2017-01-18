'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {isEmail: true, isUnique: true},
      // unique: true didn't work
    },
    phone: {
      type: DataTypes.STRING,
      validate: {len: [10,13], isNumeric: true, isAlphanumeric: false}
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {min: 150}
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(){
        Student.findAll().then(function(data){
          data.forEach(function(data){
            console.log(`id: ${data.dataValues.id}\nFullname: "${data.getFullName()}"\nage: ${data.getAge()}\n`);
          })
        })
      }
    },
    instanceMethods: {
      getFullName: function(){
        return (`${this.firstName} ${this.lastName}`)
      },
      getAge: function(){
        var birthday = new Date(this.birthday);
        return Math.floor((Date.now() - birthday) / (31557600000));
      }
    }
  });
  return Student;
};
