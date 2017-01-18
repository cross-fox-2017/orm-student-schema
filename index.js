"use strict"
var db  = require("./models")

// db.Student.bulkCreate([
//   {first_name:"Eri", last_name:"Irawan", telepon:"085777332",birthdate:"1991-02-11"},
//   {first_name:"Muhamad", last_name:"Iqbal", telepon:"085777332",birthdate:"1991-03-12"},
//   {first_name:"Radit", last_name:"dika", telepon:"085777332",birthdate:"1991-05-13"},
//   {first_name:"Yoma", last_name:"Sofwan", telepon:"085777332",birthdate:"1991-06-14"}
// ]).then(function(students){
//   console.log(students);
// })

db.Student.findById(1).then(function(student){
  console.log(student.getFullName());
});

db.Student.findById(1).then(function(student){
  console.log(student.getAge());
});

db.Student.getAllData(function(students){
  students.forEach(function(student){
    console.log("ID : " + student.id);
    console.log("Firs Name : " + student.first_name);
    console.log("Last Name : " + student.last_name);
    console.log("Telepon   : " + student.telepon);
    console.log("Full Name : " + student.getFullName)
  })
})
