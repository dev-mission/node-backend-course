const express = require('express'); // import express framework.

const app = express();

app.get('/:name', (request, response) => {
  console.log(request.params);
  response.send(`Hello ${request.params.name}!`);
})

// start the server on port 8080
app.listen(8080, () => {
  console.log('Server listening on port 8080');
})
