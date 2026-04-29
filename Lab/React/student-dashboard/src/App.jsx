import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    setStudents([...students, name]);
  };

  return (
    <BrowserRouter>
      {/* Simple Navbar */}
      <nav>
        <Link to="/">Home</Link> |<Link to="/add">Add</Link> |
        <Link to="/students">List</Link>
      </nav>

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<h2>Home Page</h2>} />

        {/* Add Student Page */}
        <Route path="/add" element={<AddStudent addStudent={addStudent} />} />

        {/* Student List Page */}
        <Route path="/students" element={<StudentList students={students} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
