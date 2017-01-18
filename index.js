"use strict"
var db  = require("./models")

db.Student.bulkCreate([
  {first_name:"Eri", last_name:"Irawan", telepon:"085777332",birthdate:"1991-02-11"},
  {first_name:"Muhamad", last_name:"Iqbal", telepon:"085777332",birthdate:"1991-03-12"},
  {first_name:"Radit", last_name:"dika", telepon:"085777332",birthdate:"1991-05-13"},
  {first_name:"Yoma", last_name:"Sofwan", telepon:"085777332",birthdate:"1991-06-14"}
]).then(function(students){
  console.log(students);
})
