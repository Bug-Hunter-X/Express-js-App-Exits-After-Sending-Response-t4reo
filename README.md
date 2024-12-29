This repository demonstrates a subtle bug in an Express.js application where the server exits unexpectedly after sending a response. The problem is that in some scenarios, especially when using asynchronous operations within the request handler, the server might close the connection prematurely.

The `bug.js` file contains the buggy code. It's a simple Express app that sends a 'Hello World' response but fails to execute a `console.log` statement intended to run after the response. The solution is provided in `bugSolution.js`.