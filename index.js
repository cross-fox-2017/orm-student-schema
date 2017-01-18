"use strict"

const db = require('./models')
const faker = require('faker')

// db.Student.bulkCreate(
//   [{firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05')},
// {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05')},
// {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05')},
// {firstName: faker.name.firstName(), lastName: faker.name.lastName(), birthday: faker.date.between('1990-01-01', '2000-01-05')}
// ]
// )
console.log(db.Student);

db.Student.findById(2).then(function(data){
  console.log(data.getFullName());
})
db.Student.findById(2).then(function(data){
  console.log(data.getAge());
})
db.Student.getAllData()
