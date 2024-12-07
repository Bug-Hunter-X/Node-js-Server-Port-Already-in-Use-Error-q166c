const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

// Use the 'listening' event for server status and error handling
server.on('listening', () => {
  console.log(`Server is listening on port ${port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`An error occurred: ${err.message}`);
    process.exit(1);
  }
});

server.listen(port); 