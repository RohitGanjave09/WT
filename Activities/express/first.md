# Express Basics

## 1. Difference between package.json and package-lock.json

- **package.json** → Stores project details and dependencies with version ranges  
- **package-lock.json** → Stores exact installed versions for consistency across systems  

---

## 2. Difference between dependencies and devDependencies

- **dependencies** → Required to run the application (e.g. express)  
- **devDependencies** → Used only during development (e.g. nodemon)  

---

## 3. Routes Creation using Express JS

```js
const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send("Home Page"); // sending response
});

// About route
app.get('/about', (req, res) => {
    res.send("About Page"); // route handling
});

app.listen(3000, () => {
    console.log("Server running on port 3000"); // server start
});

4. Types of HTTP Methods
GET → Retrieve data
POST → Create new data
PUT → Update existing data
DELETE → Remove data
// POST method
app.post('/user', (req, res) => {
    res.send("User created"); // create operation
});

// PUT method
app.put('/user', (req, res) => {
    res.send("User updated"); // update operation
});