const fs = require('fs');

// create person object
const person = {
  fname: 'ahmed',
  lname: 'hossam',
  age: 20,
  city: 'alex'
};

// convert object to JSON
const jsonPerson = JSON.stringify(person);

// store JSON in file
fs.writeFileSync('person.json', jsonPerson);

// read file and parse JSON to object
const fileData = fs.readFileSync('person.json').toString();
const Personobject = JSON.parse(fileData);

// update object data
Personobject.fname = 'adel';
Personobject.lname = 'ahmed';
Personobject.age = 40;
Personobject.city = 'cairo';

// convert object to JSON
const updatedJsonPerson = JSON.stringify(Personobject);

// store updated JSON in file
fs.writeFileSync('updated-person.json', updatedJsonPerson);