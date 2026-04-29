/*
middleware is a function that runs before sending response 
It can check data, log info, authenticate user
syntax
    app.use((req,res,next) => {
        console.log("request received" + new Date());
        next();
    })

Activity:
1.where we use middleware 
--Middleware is used between the request and the response in an application

2.why we need to use middleware function
--Middleware functions are used to perform various tasks such as logging, authentication, data validation, and error handling. They help in processing requests and responses, allowing developers to add functionality and manage the flow of the application effectively.

3.In company level when we use

next : it passes control to the next function , without next request will hang
*/

const express = require("express");
const app = express();
const port = 3000;

const department = [
  { id: 1, name: "CSE" },
  { id: 2, name: "IT" },
  { id: 3, name: "MECH" },
];

const student = [
  { id: 1, name: "Tahir", deptId: 1 },
  { id: 2, name: "Vrushabh", deptId: 1 },
  { id: 3, name: "Digvijay", deptId: 3 },
  { id: 4, name: "Rushi", deptId: 2 },
  { id: 5, name: "Rohit", deptId: 3 },
  { id: 6, name: "Parth", deptId: 2 },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/department", (req, res) => {
  res.json(department);
});

app.get("/department/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const s = [];

  for (let i = 0; i < student.length; i++) {
    if (student[i].deptId == id) {
      s.push(student[i]);
    }
  }
  res.json(s);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
