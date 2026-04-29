# Middleware (Express)

## 1. Why we use middleware?

Middleware is used to process requests before sending response.  
It can modify request/response, validate data, or control flow using `next()`.

---

## 2. Types of middleware

- **Application-level** → Used in app (app.use)  
- **Router-level** → Used in routes (router.use)  
- **Built-in** → express.json(), express.static()  
- **Third-party** → morgan, cors  
- **Error-handling** → Handles errors  

---

## 3. Benefits of middleware

- Code reuse  
- Better request handling  
- Easy validation and authentication  
- Improves structure and readability  

---

## 4. Where middleware is used in company level?

- Authentication (JWT login check)  
- Logging requests (user activity)  
- Validation (form/data validation)  
- Error handling (central error control)  

```js
const express = require('express');
const app = express();

// middleware example
app.use((req, res, next) => {
    console.log("Middleware executed"); // logging
    next(); // move to next
});

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(3000);