const express = require('express'); // import express framework.

const app = express();

// create our first route.
app.get('/', (request, response) => {
  response.send("Hello World!");
})

// start the server on port 8080
app.listen(8080, () => {
  console.log('Server listening on port 8080');
})
