const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/student", require("./studentRoutes"));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
