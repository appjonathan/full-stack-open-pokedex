/* global process */
const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;
a
pp.use(express.static("dist"));

app.listen(PORT, () => {
  // console.log("server started on port 5000");
});
