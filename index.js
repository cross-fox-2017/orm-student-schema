"use strict"

const db = require('./models/')


// db.Student.bulkCreate([ // Membuat Data banyak (Bulk) jika hanya 1, hanya menggunakan create
//   { first_name: 'Firman', last_name: 'Pebrizal', birthdate: '1992-02-06', email : "firman@yahoo.com", phone : '08127564532', height: 179 },
//   { first_name: 'Yola', last_name: 'Saputri', birthdate: '1994-12-29', email : "yola@yahoo.com", phone : '08127564572', height: 170  }
// ])

// check validasi

db.Student.create({
  first_name:'tes2', last_name:'email', birthdate:'1955-01-01', email:'firman123@yahoo.com', height:155, phone:'0123456783'
}).then(function(data) {
  console.log("Adding....", data);
})



// db.Student.getAllData(function (student) {
//   student.forEach(function (student) {
//     console.log(student)
//     // console.log(`ID        : ${student.id}`);
//     // console.log(`Firstname : ${student.first_name}`);
//     // console.log(`Lastname  : ${student.last_name}`);
//     // console.log(`Fullname  : ${student.full_name}`);
//     // console.log(`Age       : ${student.age}\n`);
//   })
// })
