"use strict"

var db = require('./models')

db.Student.create({
  firstname: "Iqbal",
  lastname: "Pratajaya",
  birthdate: "1999-03-12",
  height: 151,
  email: "iqbal@pratajaya.com",
  phone: "081246412422"
}).then(function() {
  console.log("Data Added");
}).catch(function(e) {
  console.log(e.message);
})
// for (var i = 2; i < 5;i++) {
// db.Student.destroy({
//
//     where: {
//       id: i
//     }
//
// })
// }
// db.Student.bulkCreate([
//   { firstname: 'irwin', lastname: 'pratajaya', birthdate:'1989-03-21' },
//   { firstname: 'ida', lastname: 'gana', birthdate:'1989-01-12' },
//   { firstname: 'fadly', lastname: 'fadly', birthdate:'1989-05-02' }
// ]).then(function (student) {
//   console.log('----------------------student created----------------------');
// })

// db.Student.getAllData(function(students) {
//   students.forEach(function (student) {
//     console.log(`\nID: ${student.id}`);
//     console.log(`Firstname: ${student.firstname}`);
//     console.log(`Lastname: ${student.lastname}`);
//     console.log(`Fullname: ${student.getFullName()}`);
//     console.log(`Age: ${student.getAge()} years old`);
//   })
// })


// DRIVER CODE
// db.Student.getAllData(function(students) {
//   students.forEach(function(student) {
//     console.log(`\nID: ${student.id}`)             // this will print 1
//     console.log(`Firstname: ${student.firstname}`)     // this will print John
//     console.log(`Lastname: ${student.lastname}`)      // this will print Doe
//     console.log(`Fullname: ${student.fullname}`)
//     // console.log(student.getFullName())      // this will print John Doe
//     console.log(`Birthdate: ${student.birthdate}`);
//     console.log(`Age: ${student.age} years old`);
//     console.log(`Email: ${student.email}`);
//     console.log(`Phone: ${student.phone}`)
//   })
// })
