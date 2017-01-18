"use strict"

const db = require('./models');

db.Student.create({
  firstname : 'Achmad',
  lastname  : 'Kamil',
  birthdate : '1993-02-17',
  email     : 'kamil@hacktiv.com',
  height    : 170,
  phone     : '08123456789'
})
.then(function(students){
  console.log('Students Added');
})
.catch(function(e) {
  console.log(e.message);
})

// db.Student.bulkCreate([
//   {firstname: 'Nurul', lastname: 'Khassanah', birthdate: '1993-06-24', email: 'nurul@kamil.com', height: 177, phone: '081210111213'},
//   {firstname: 'Karim', lastname: 'Khawarizmi', birthdate: '1993-07-17', email: 'karim@kamil.com', height: 178, phone: '081214151617'},
//   {firstname: 'Khanza', lastname: 'Kamilia', birthdate: '1993-08-24', email: 'khanza@kamil.com', height: 179, phone: '081218192021'}
// ])
// .then(function(students) {
//   console.log(students)
// })

// db.Student.findById(2).then(function(students) {
//   console.log(students.getFullName());
// })

// db.Student.destroy({
//   where: {
//     id: 9
//   }
// });

// db.Student.findById(2).then(function(students) {
//   console.log(students.getAge());
// })

// db.Student.getAllData(function(students) {
//   students.forEach(function(student) {
//     console.log(student.id);
//     console.log(student.firstname);
//     console.log(student.lastname);
//     console.log(student.fullname);
//     console.log(student.birthdate);
//     console.log(student.age)
//   })
// })
