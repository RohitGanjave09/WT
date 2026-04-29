const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const db = require("./DbConnection");

router.post("/add", (req, res) => {
  const { name, age, course } = req.body;

  const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";

  db.query(sql, [name, age, course], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Student added successfully");
    }
  });
});

router.get("/list", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/update/:id", (req, res) => {
  const { name, age, course } = req.body;
  const { id } = req.params;

  const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";

  db.query(sql, [name, age, course, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Student updated successfully");
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM students WHERE id=?", [id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Student deleted successfully");
    }
  });
});

module.exports = router;
