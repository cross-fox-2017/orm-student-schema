"use strict"

const db = require('./models');

db.Student.create({
  first_name: "Pak",
  last_name: "Timo",
  birthdate: '1971-10-31',
  height: 172,
  email: 'paktimo@omitkapi.com',
  phone: '081234567512'
}).then(function(){
  console.log('data added')
})
.catch(function(e){
  console.log(e.message);
})

// db.Student.bulkCreate([
//   {first_name: 'Muhammad', last_name: 'Iqbal', birthdate:'2006-09-10'},
//   {first_name: 'Yoma', last_name: 'Sofwan', birthdate:'2005-06-10'},
//   {first_name: 'Irwin', last_name: 'Pratajaya', birthdate:'2004-07-10'},
//   {first_name: 'Eri', last_name: 'Siapa', birthdate:'2003-08-10'},
// ]).then(function(students) {
//   console.log(students)
// })
//
// db.Student.destroy({
//   where: {
//     id: 9
//   }
// });
// db.Student.getAllData(function(students) {
//   students.forEach(function(student) {
//     console.log(student.id)             // this will print 1
//     console.log(student.first_name)     // this will print John
//     console.log(student.last_name)      // this will print Doe
//     console.log(student.full_name)
//     console.log(student.age)
//   })
// })
// db.Student.findById(2).then(function(student){
//   console.log(student.getFullName());
// })
//
// db.Student.findById(2).then(function(student){
//   console.log(student.getAge());
// })
