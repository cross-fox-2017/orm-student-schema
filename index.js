"use strict"
const db = require("./models");

// db.Student.bulkCreate([
//   { first_name: 'endy', last_name: "santoso", birthdate: "1992-04-01" },
//   { first_name: 'kucing', last_name: "wafer", birthdate: "2005-02-14" },
//   { first_name: 'panda', last_name: "biscuit", birthdate: "2009-05-10" }
// ]).then(function(hasil) { // hasil dari bulkcreate akan digunakan sebagai parameter di anonym function
//   console.log("sucess") // ... in order to get the array of user objects
// })

// db.Students.getAge(function(result) {
//   for (let i = 0; i < result.length; i++) {
//     console.log(`Nama: ${result[i].first_name} ${result[i].last_name}`);
//     console.log(result[i].ultah);
//     console.log("");
//   }
// })

// db.Student.getFullName();

// var all = db.Student.getAllData( function(data) {
//   data.forEach(function(data) {
//     console.log(data.id);
//     console.log(data.first_name);
//     console.log(data.last_name);
//     console.log(data.full_name);
//     console.log("");
//   })
// } )
//
db.Students.create(
  {first_name: 'kucing', last_name: "wafer", birthdate: "1992-04-01", email: "kucing", height: 155, phone: "1234567890123456"}
);
