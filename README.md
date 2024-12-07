# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js: attempting to start a server on a port that is already in use.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a robust solution.

## Bug Description

The primary issue lies in directly calling `server.listen(8080)`. If port 8080 is occupied by another process (another server, a different application, etc.), the server will fail to start, throwing an `EADDRINUSE` error.

## Solution

The solution involves implementing error handling for the `server.listen()` method. By using the `'listening'` event and adding a comprehensive `error` listener, we can gracefully handle port conflicts and provide informative messages to the user.