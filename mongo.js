const uuidv1 = require('uuid/v1');
const mongoose = require('mongoose');

console.log('pw', process.argv[2]);
console.log('name', process.argv[3]);
console.log('number', process.argv[4]);

if (process.argv.length < 3) {
  console.log('give pw as argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://reizka:${password}@cluster0-fagh0.gcp.mongodb.net/phonebook-app?retryWrites=true&w=majority`;
console.log('url', url);
mongoose.connect(url, { useNewUrlParser: true });
const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: String
});
const Person = mongoose.model('Person', noteSchema);

if (process.argv[3]) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
    id: uuidv1()
  });

  person.save().then(response => {
    console.log('note saved!');
    mongoose.connection.close();
  });
} else {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person);
    });
    mongoose.connection.close();
  });
}
