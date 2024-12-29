const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is where the unexpected behavior happens
  res.send('Hello World!');
  console.log('Request received'); //This log statement might not be executed
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});