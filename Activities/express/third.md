# Query Parameters (Express)

## 1. What are the query parameters?

Query parameters are values passed in the URL after `?` to send extra data to the server.  
They are used for filtering, searching, or sorting data.

---

## 2. Detail study about query parameter

- Written after `?` in URL  
- Multiple params separated by `&`  
- Accessed using `req.query` in Express  
- Always received as **string**

Example:
URL → `/user?name=John&age=20`  

```js
app.get('/user', (req, res) => {
    console.log(req.query); // { name: 'John', age: '20' }
    res.send(req.query.name); // accessing value
});


3. Examples of query parameters
/products?category=mobile
/search?q=laptop
/users?page=2&limit=10
/login?redirect=home



4. Real-time use of query parameters
Search functionality (Google search)
Pagination (page, limit)
Filtering (price, category)
Sorting (asc/desc order)
app.get('/products', (req, res) => {
    const category = req.query.category; // get query param
    res.send("Category: " + category); // response
});