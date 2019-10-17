const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

let persons = [
  {
    name: "Mister Lacelove",
    number: "39-44-5323523",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

const generateId = function() {
  console.log("started");
  let no = Math.floor(Math.random() * (1000000 + persons.length));
  return no;
};

app.post("/persons", (request, response) => {
  const body = request.body;

  if (!body || !body.name || !body.number) {
    return response.status(400).json({
      error: "content missing"
    });
  }

  if (
    persons.find(function(person) {
      return person.name === body.name;
    })
  ) {
    return response.status(400).json({
      error: "name must be unique"
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  };
  console.log("person", person);
  persons = persons.concat(person);

  response.json(person);
});

app.delete("/persons/:id", (request, response) => {
  const id = Number(request.params.id);

  persons = persons.filter(function(person) {
    return person.id !== id;
  });

  response.status(204).end();
});

app.get("/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  person = persons.find(function(person) {
    //console.log(person.id, typeof person.id, id, typeof id, person.id === id);
    if (person.id === id) {
      return person;
    }
  });

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.get("/persons", (req, res) => {
  res.json(persons);
});

//https://stackoverflow.com/questions/10645994/how-to-format-a-utc-date-as-a-yyyy-mm-dd-hhmmss-string-using-nodejs
app.get("/info", (req, res) => {
  res.send(
    `<div>
      <h1>Phonebook Info</h1>
      <p> Currently the phonebook db has stored info of ${
        persons.length
      } persons</p>
      <p>${new Date()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "")}
    </div>`
  );
});

app.get("/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => {
    console.log(note.id, typeof note.id, id, typeof id, note.id === id);
    return note.id === id;
  });
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete("/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
