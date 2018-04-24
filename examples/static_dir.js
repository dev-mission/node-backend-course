const express = require("express"); // import express framework.

const app = express();

// serve all files from the `static' directory
app.use(express.static("static"));

// start the server on port 8080
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
