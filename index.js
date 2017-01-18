"use strict"

const db = require('./models')

// var all = db.Student.getAllData(function(students) {
//   students.forEach(function(student) {
//     console.log(student.id)
//     console.log(student.first_name)
//     console.log(student.last_name)
//     console.log(student.full_name)
//     console.log(student.age)
//   })
// })

db.Student.create({
  first_name: 'Fadly',
  last_name: 'Kayo',
  birthdate: '1989-05-22',
  email: 'fadly@gmail.com',
  phone: '0912asda!'
}).then(function(student) {
  console.log(student);
}).catch(function(err){
  console.log(err.message);
})


// console.log(all)
// console.log(create)


/*
  models.Student.findById(2).then(function(data){
    console.log(data.getFullName());
  })

  models.Student.findById(2).then(function(data){
    console.log(data.getAge());
  })
*/


/*
  models.Student.bulkCreate([
    {first_name: 'Rubi', last_name: 'Henjaya', birthdate: '1989-03-31'},
    {first_name: 'Windiana', last_name: 'Krismanuyar', birthdate: '1992-09-22'}
  ]).then(function(student) {
    console.log(student);
  })

  models.Student.getAllData(function(students){
    students.forEach(function(student){
      console.log(student.id)
      console.log(student.first_name)
      console.log(student.last_name);
    })
  })

  models.Student.create({
    age: 28
  }).then(function(student){
    console.log(student);
  })

  models.Student.destroy({
    where: {
      id: 7
    }
  });

  models.Student.findAll({
    where: {
      id: 2
    }
  }).then(function(student){
    console.log(student);
  })
*/
