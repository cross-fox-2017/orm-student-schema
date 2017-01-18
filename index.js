"use strict"

const db = require('./models')

// db.Student.bulkCreate(
//   [
//   {first_name: 'John', last_name: 'Doe', birth_date: '1994-01-01', email: 'john@yahoo.com', height: 170, phone: '08123123123'},
//   {first_name: 'Jane', last_name: 'Smith', birth_date: '1995-01-01', email: 'jane@yahoo.com', height: '160', phone: '08456456456'}
//   ])
// .then(function(students) {
//   console.log(students);
// })

// find by id....
// db.Student.findById(19).then(function (student) {
//   console.log(student.getFullName())
// })

// db.Student.findById(19).then(function (student) {
//   console.log(student.getAge())
// })

// All Data...
// db.Student.getAllData(function(students) {
//   students.forEach(function(student) {
//     console.log("\nStudent ID : " + student.id)             // this will print 1
//     console.log("First Name : " + student.first_name)     // this will print John
//     console.log("Last Name : " + student.last_name)      // this will print Doe
//     console.log("FUll Name : " + student.getFullName())
//     console.log("Birth Date : " + student.birth_date);      // this will print John Doe
//     console.log("Age : " + student.getAge())
//   })
// })


// delete..
// db.Student.destroy({
//   where: {
//     id: 21
//   }
// })

//tes phone & email
// db.Student.create({
//   first_name:'aa', last_name:'bb', birth_date:'1955-01-01', email:'bbb@gmail.com', height:140, phone:'0123456123'
// }).then(function(data) {
//   console.log("Adding....", data);
// })
