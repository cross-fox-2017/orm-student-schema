'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {isEmail: {args: true, msg: "Email in wrong format"},
      isUniq: function(value, next){
        Student.findOne({where:{email:value}, attributes: ['id']}).done(function(err,data){
          if (err){ return next(err)}
          if (data){ return next({msg: 'Email address already in use!'})}
            next();
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {len: {args: [10,13], msg: "Phone length must between 10-13"}, isNumeric: {args: true, msg: "Number Only"}, isAlphanumeric: {args: false, msg: "No Special Character"}}
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {min: {args: 150, msg: "Minimal Height Must Above 150"}}
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
