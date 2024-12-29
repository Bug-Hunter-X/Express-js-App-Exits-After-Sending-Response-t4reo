const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('Request received'); //This log statement will now execute
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});