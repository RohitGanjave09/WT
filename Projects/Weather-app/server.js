const express = require("express");
// Use Node.js built-in fetch (v18+), remove node-fetch dependency
// const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static("public"));

// API route
app.get("/weather", async (req, res) => {
  const city = req.query.city;

  try {
    let response = await fetch(`https://wttr.in/${city}?format=3`);
    let data = await response.text();

    res.json({ result: data });
  } catch (error) {
    res.json({ result: "Error fetching weather" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});