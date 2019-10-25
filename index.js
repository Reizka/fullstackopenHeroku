require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Person = require('./models/person');
const errors = require('./utility/errorHandlers');
const errorHandler = errors.errorHandler;
const unknownEndpoint = errors.unknownEndpoint;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));

app.post('/api/persons', (req, res, next) => {
  const body = req.body;

  const person = new Person({
    name: body.name,
    number: body.number
  });

  person
    .save()
    .then(savedPerson => {
      return savedPerson.toJSON();
    })
    .then(function(savedAndFormattedNote) {
      console.log('savedAndFormattedNote', savedAndFormattedNote);
      res.json(savedAndFormattedNote);
    })
    .catch(error => next(error));
});

app.delete('/api/persons/:id', (req, res, next) => {
  console.log('person to be deleted', req.params.id, typeof req.params.id);
  Person.findByIdAndRemove(req.params.id)
    .then(function() {
      res.status(204).end();
    })
    .catch(error => next(error));
});

app.get('/api/persons/:id', (req, res, next) => {
  //const id = Number(req.params.id);
  console.log('get by id', req.params.id, typeof req.params.id);
  Person.findById(req.params.id)
    .then(function(person) {
      if (person) {
        console.log('response', person);
        res.json(person.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error));
});

app.put('/api/persons/:id', (req, res, next) => {
  console.log('put person', req.body);
  const body = req.body;

  const person = {
    name: body.name,
    number: body.number
  };

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON());
    })
    .catch(error => next(error));
});

app.get('/api/persons', (req, res, next) => {
  console.log('get persons');
  Person.find({})
    .then(function(people) {
      res.json(people.map(person => person.toJSON()));
    })
    .catch(error => next(error));
});

//https://stackoverflow.com/questions/10645994/how-to-format-a-utc-date-as-a-yyyy-mm-dd-hhmmss-string-using-nodejs
app.get('/api/info', (req, res,next) => {
  console.log('get info');

  Person.find({})
    .then(function(people) {
      res.send(
        `<div>
          <h1>Phonebook Info</h1>
          <p> Currently the phonebook db has stored info of ${
  people.length
} people</p>
          <p>${new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')}
        </div>`
      );
    })
    .catch(error => next(error));
});

app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
