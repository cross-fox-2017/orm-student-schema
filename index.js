"use strict"
var db = require("./models")


// db.Student.bulkCreate([
//
//           {first_name: 'iqbal',last_name: 'cute',birthdate:'1996-06-14' },
//           {first_name: 'timo',last_name: 'code',birthdate:'1989-04-11' },
//           {first_name: 'yoma',last_name: 'sate',birthdate:'1999-06-01' },
//           {first_name: 'mangkey',last_name: 'KECE',birthdate:'1976-06-01' },
//           {first_name: 'fadly',last_name: 'kayo',birthdate:'2000-06-14' },
//           {first_name: 'momo',last_name: 'mumu',birthdate:'1975-06-14' },
//           {first_name: 'gaga',last_name: 'gigi',birthdate:'1910-01-14' }
//
//         ]).then(function(student) {
//
//   console.log("DATA ADDED !");
// }

// testing for EMAIL
db.Student.create(

          {first_name: 'KECE',last_name: 'BINGIT',birthdate:'1996-06-14',email:"yoma@yahoo.com" }
        ).then(function(student) {

  console.log("DATA ADDED !");
}).catch(function(err){

      console.log(err.message);
})

// testing for Height
db.Student.create(

          {first_name: 'KECE',last_name: 'BINGIT',birthdate:'1996-06-14',height:130 }
        ).then(function(student) {

  console.log("DATA ADDED !");
}).catch(function(err){

      console.log(err.message);
})

db.Student.findById(4).then(function(student) {
  // project will be an instance of Project and stores the content of the table entry
  // with id 123. if such an entry is not defined you will get
  console.log("FULL NAME\n");
  console.log(student.getFullName())
})

//
//Tampilkan semua data
db.Student.getAllData(function(result){

  console.log("DATA STUDENT\n");
  for(let i = 0;i < result.length;i++){
        console.log("Nama : "+result[i].first_name)
        console.log("Nama Belakang : "+result[i].last_name);
        console.log("Nama Lengkap : "+result[i].first_name+" "+result[i].last_name);
        console.log("Tanggal Lahir : "+result[i].birthdate);
   }

})
