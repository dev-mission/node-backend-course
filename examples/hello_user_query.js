const express = require('express'); // import express framework.

const app = express();

app.get('/', (request, response) => {
  console.log(request.query);
  response.send(`Hello ${request.query.first_name} ${request.query.last_name}!`);
})

// start the server on port 8080
app.listen(8080, () => {
  console.log('Server listening on port 8080');
})
