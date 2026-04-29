# Template Engine (Express)

## 1. Implement EJS

EJS is used to create dynamic HTML using JavaScript.

Steps:
- Install EJS → `npm install ejs`
- Set view engine
- Create `.ejs` file inside views folder

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // set EJS

app.get('/', (req, res) => {
    res.render('index', { name: "John" }); // send data to EJS
});

app.listen(3000);

<h1>Hello <%= name %></h1> <!-- display data -->


2. What are static files?

Static files are files that do not change (CSS, JS, images).

app.use(express.static('public')); // serve static files


3. What is express router?

Express Router is used to separate routes into different files for better structure.

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Home route"); // route handling
});

module.exports = router;


4. Complete express workflow
Client sends request
Request goes to middleware
Route handles request
Controller logic executes
Response sent to client

Flow:
Client → Middleware → Route → Logic → Response