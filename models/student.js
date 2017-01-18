'use strict';

// const validator = require('validator');

module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        birthday: DataTypes.DATE,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Format Email Salah"
                },
                isUniqued: function(value, next){//next bisa diganti "berikutnya" bukan fungsi bawaan
                  Student.findAll({
                    where:{email: value}
                  }).then(function(data){
                    if(data.length > 0){
                      return next("Data Email Sudah Ada")
                    }
                    return next()
                  })
                }
            }
        },
        tinggi_badan: {
            type: DataTypes.INTEGER,
            validate: {
                min: {
                    args: 150,
                    msg: "Minimal Tinggi Badan 150cm"
                }
            }
        },
        phone: {
          type: DataTypes.INTEGER,
          validate:{
            len:{
                args:[10-13],
                msg:"Validation error: Phone Length must be 10 -13"
            },
            isAlphanumeric:{
              args:true,
              msg:"Validation error: Phone not allow letter"
            },
            isAlpha:{
              args:true,
              msg:"Validation error: Phone not allow alphanumeric"
            }
          }
        }

    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getAllData: function(cb) {
                this.findAll().then(function(data) {
                    var tmpArr = []
                    for (var i = 0; i < data.length; i++) {
                        tmpArr.push({
                            id: data[i].id,
                            first_name: data[i].first_name,
                            last_name: data[i].last_name,
                            birthday: data[i].birthday,
                            full_name: `${data[i].first_name} ${data[i].last_name}`
                        })
                    }
                    cb(tmpArr)
                })
            }
        },
        instanceMethods: {
            getFullName: function() {
                return `${this.first_name} ${this.last_name}`
            },
            getAge: function() {
                return `Umur : ${new Date().getFullYear() - this.birthday.getFullYear()}`
                console.log("\n");
            }
        }
    });
    return Student;
};
