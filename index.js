"use strict"

const models = require('./models')

// models.Student.create({ //Untuk Validasi
//     first_name: "Firman",
//     last_name: "Master",
//     birthday: "2003-02-02",
//     email: "firmasdfsdfn@gmail.com",
//     tinggi_badan: 1350,
//     phone: "0586748475744"
// })
// models.Student.create({ // untuk tambah  1 data dan validasi
//     first_name: "Firman",
//     last_name: "Master",
//     birthday: "2003-02-02",
//     email: "firman@gmail.com",
//     tinggi_badan: 150,
//     phone: 0586748475744
// }).then(function(){
//   console.log("Data Berhasil Ditambahkan");
// }).catch(function(){
//   console.log("Cek Format Pengisian");
// })

// models.Student.bulkCreate([{ // untuk banyak data
//     first_name: "Firman",
//     last_name: "Master",
//     birthday: "2003-02-02",
//     email:"firmancom",
//     tinggi_badan:130,
//     phone:0586748475744
// }, {
//     first_name: "Fir",
//     last_name: "Mon",
//     birthday: "2003-02-02",
//     email:"firman@gmail.com",
//     tinggi_badan:50,
//     phone:0586748475744
// }])

// models.Student.getAllData(function(getData){ // function(getData) adalah callback dari cb(data) pada Student
//   getData.forEach(function(tmpGetData){
//     console.log(tmpGetData.id);
//     console.log(tmpGetData.first_name);
//     console.log(tmpGetData.last_name);
//     console.log(tmpGetData.full_name);
//     // console.log(tmpGetData);
//   })
// })

// models.Student.findAll().then(function(tmpData) {
//     tmpData.forEach(function(item) {
//         console.log(item.getFullName());
//         console.log(item.getAge()+"\n");
//     })
// })
