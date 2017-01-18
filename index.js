"use strict"

let db = require('./models')

// db.Student.bulkCreate([
//   {firstname:'mangku', lastname:'widodo', birthdate:'1996-05-29'},
//   {firstname:'bulok', lastname:'widodo', birthdate:'1994-03-19'},
//   {firstname:'widodo', lastname:'widodo', birthdate:'1995-02-11'}
//
// ]).then(function (Student) {
//   console.log('student add');
// })

db.Student.getAllData(function (students) {
  students.forEach(function (student) {
    console.log(`\nID : ${student.id}`);
    console.log(`Firstname: ${student.firstname}`);
    console.log(`Lastname: ${student.lastname}`);
    console.log(`Fullname: ${student.getFullName()}`);
  })
})
