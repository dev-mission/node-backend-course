const express = require("express"); // import express framework.

const app = express();

// serve response from file
app.get("/", (req, res) => {
  res.sendFile("./static/index.html");
});

// start the server on port 8080
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
