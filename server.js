const http = require('http');
const port = 3000;

let students = ['Caleb', 'Dave', 'Fred'];
let todos = ['Do this', 'Do that']

function handleMyRequest(request, response) {
  if (request.url === '/students') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(students));
  } else if (request.url === '/api/todos' && request.method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(todos));
  } else {
    response.writeHead(418);
    response.end();
  }
}
const server = http.createServer(handleMyRequest);

console.log(`Server is running on port ${port}`);
server.listen(port);
