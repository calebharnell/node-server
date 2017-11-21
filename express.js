const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Our array of students
let students = ['Caleb', 'Dave', "Fred"];
// Our array of todos
let todos = [{task: "Do this", done: false}, {task: "Do that", done: true}]

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

// GET /todos
app.get('/todos', function(req, res) {
  // Send user a list of todos
  res.send(todos);
})

// POST /todos
app.post('/todos', function(req, res) {
  // Add new todo to array
  todos.push(req.body)
  // Send user a list of todos
  res.send(todos);
})

// All other urls - 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

// Listen on our specified port
app.listen(port);
