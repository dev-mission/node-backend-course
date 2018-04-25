const express = require("express"); // import express framework.
const bodyParser = require("body-parser"); // parse request body.

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // handle url encoded forms

// serve static HTML file
app.get("/", (req, res) => {
  res.sendFile("./static/request_body.html", { root: __dirname });
});

//! [methodpost]
app.post("/say-hello", (req, res) => {
  console.log(req.body);
  res.send(`Hello ${req.body.name}!`);
});
//! [methodpost]

// start the server on port 8080
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
