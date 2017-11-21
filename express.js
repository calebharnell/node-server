const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Our array of students
let students = ['Caleb', 'Dave', "Fred"];
// Our array of todos
let todos = [{id: 0, task: "Do this", done: false}];

let currentId = 0;

// BodyParser to make it easy to read POST data
app.use(bodyParser.json());

// GET /students
app.get('/students', function(req, res) {
  // Send user a list of students
  res.send(students);
});

// POST /students
app.post('/students', function(req, res) {
  // Add new student to array
  students.push(req.body.name)
  // Send user a list of students
  res.send(students);
});

// GET /todos
app.get('/api/todos', function(req, res) {
  // Send user a list of todos
  res.send(todos);
});

// Get todo by ID
app.get('/api/todos/:id', function(req, res) {
  res.send(todos.filter((task) => {
    return task.id === parseInt(req.params.id)
  }))
});

// POST /todos
app.post('/api/todos', function(req, res) {
  // Define new task
  let newTask = {};
  newTask = req.body;
  // Increment new task id from current id
  newTask.id = ++currentId;
  // Add new task to Array
  todos.push(newTask);
  // Send user a list of todos
  res.send(todos);
})

// All other urls - 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
})

// Listen on our specified port
app.listen(port);
