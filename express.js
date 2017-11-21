const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Our array of students
let students = ['Caleb', 'Dave', "Fred"];

// BodyParser to make it easy to read POST data
app.use(bodyParser.json())

// GET /students
app.get('/students', function(req, res) {
  // Send user a list of students
  res.send(students);
})

// POST /students
app.post('/students', function(req, res) {
  // Add new student to array
  students.push(req.body.name)
  // Send user a list of students
  res.send(students);
})

// Listen on our specified port
app.listen(port);
