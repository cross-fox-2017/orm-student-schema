"use strict"

 var mod = require("./models")

// mod.Student.bulkCreate([
//   { first_name: 'foo' ,last_name:'bar',birthdate:'1999-01-20',email:'foo@gmail.com',phone:'081276861447'},
//   { first_name: 'fii' ,last_name:'baron',birthdate:'2000-02-25',email:'fii@gmail.com',phone:'081276861448'},
//   { first_name: 'fix' ,last_name:'bor',birthdate:'1998-01-27',email:'fix@gmail.com',phone:'081276861449'},
//   { first_name: 'flex' ,last_name:'barus',birthdate:'1989-01-29',email:'fexl@gmail.com',phone:'081276861441'}
// ]).then(function() {
//   console.log('data added!')
// })
// mod.Student.create(
//   {first_name: 'feer',last_name:'bero',birthdate:'1998-01-26',email:"foo@gmail.com"}
// ).then(function(){
//   console.log('data add')
// }).catch(function(e){
//   console.log(e.message)
// })

mod.Student.findById(1).then(function(student){
  console.log(student.getFullName());
  mod.Student.findById(1).then(function(student){
    console.log(student.getAge());
  })
  mod.Student.getAllData(function(students){
    students.forEach(function(student){
      console.log("id: "+student.id)
      console.log("nama-depan: "+student.first_name)
      console.log("nama-belakang: "+student.last_name)
      console.log("nama-lengkap: "+student.getFullName()+"\n")
      console.log("nama-belakang: "+student.email)
    })
  })
})
