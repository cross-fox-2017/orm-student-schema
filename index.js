"use strict"

var db = require("./models");

// db.Student.bulkCreate([{first_name:"Andi", last_name:"Wijaya",birthday:"1990-02-13",email:"didietsuryadi@gmail.com",height:172,phone:"0816895056"},
//                   {first_name:"Andi", last_name:"Hermansyah",birthday:"1992-03-13",email:"didietsuryadi@gmail.com",height:172,phone:"0816895056"},
//                   {first_name:"Didit", last_name:"Wijaya",birthday:"1990-01-13",email:"suryadi@gmail.com",height:145,phone:"0816895056"}]).then(function(){
//                     console.log('DATA ADDED')
//                   });


  // db.Student.findById(1).then(function(data){
  //   console.log(data.getFullName());
  // })
  //
  // db.Student.findById(1).then(function(data){
  //   console.log(data.getAge());
  // })
  //
  // db.Student.getAllData(function(resultCb){
  //   console.log("--------------DATA STUDENT-----------");
  //   for(var i = 0; i < resultCb.length;i++){
  //     console.log(`ID SISWA   : ${resultCb[i].id}`);
  //     console.log(`FIRST NAME : ${resultCb[i].first_name}`);
  //     console.log(`LAST NAME  : ${resultCb[i].last_name}`);
  //     console.log(`FULL NAME  : ${resultCb[i].first_name} ${resultCb[i].last_name}`);
  //     console.log(`BIRTHDAY   : ${resultCb[i].birthday}`);
  //   }
  // })

db.Student.create({first_name:"Andi", last_name:"Wijaya",birthday:"1990-02-13",email:"dedesuryadi@gmail.com",height:170,phone:"0816895056"}).then(function(data){
  console.log("data added", data);
}).catch(function(err){
  console.log(err.message);
})
