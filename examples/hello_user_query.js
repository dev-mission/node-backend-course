const express = require("express"); // import express framework.

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  res.send(`Hello ${req.query.first_name} ${req.query.last_name}!`);
});

// start the server on port 8080
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
