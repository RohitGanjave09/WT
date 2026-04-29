const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/profile", (req, res) => {
  res.send("This is profile page");
});

app.get("/Help", (req, res) => {
  res.send("This is help page");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.get("/time", (req, res) => {
  const t = new Date();
  res.json({
    message: "hello",
    time: t,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
