"use strict"

var db = require("./models");

// db.Student.bulkCreate([{first_name:"dada", last_name:"wewe",birthdate:"1990-02-09",email:"dada@gmail.com",height:180,phone:"123123"},
//                   {first_name:"didi", last_name:"wowo",birthdate:"1990-03-09",email:"didi@gmail.com",height:189,phone:"111111"},
//                   {first_name:"dudu", last_name:"wiwi",birthdate:"1990-01-09",email:"dudu@gmail.com",height:177,phone:"231423"}]).then(function(){
//                     console.log('DATA ADDED')
//                   });

  // db.Student.findById(6).then(function(data){
  //   console.log(data.getFullName());
  // })


  // db.Student.findById(10).then(function(data){
  //   console.log(data.getAge());
  // })


  db.Student.getAllData(function(resultCb){
    console.log("--------------DATA STUDENT-----------");
    for(var i = 0; i < resultCb.length;i++){
      console.log(`ID SISWA   : ${resultCb[i].id}`);
      console.log(`FIRST NAME : ${resultCb[i].first_name}`);
      console.log(`LAST NAME  : ${resultCb[i].last_name}`);
      console.log(`FULL NAME  : ${resultCb[i].first_name} ${resultCb[i].last_name}`);
      console.log(`BIRTHDAY   : ${resultCb[i].birthdate}`);
    }
  })

    // db.Student.create({first_name:"ccc", last_name:"ccc",birthdate:"1993-03-03",email:"dudu@gmail.com",phone:"201e", height:100}).then(function(data){
    //   console.log("data added", data);
    // }).catch(function(err){
    //   console.log(err.message);
    // })


// db.Student.destroy({
//   where: {
//   id:4
//   }
// })
