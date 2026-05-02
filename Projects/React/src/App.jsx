import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav className="navbar" style={{ display: "flex", padding: "10px", backgroundColor: "#f5f5f5", borderBottom: "1px solid #ddd" }}>
        <h2>📚 Library</h2>
        <div className="links" style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft: "auto" }}>
          <Link to="/">Home</Link>
          <Link to="/services">Books</Link> 
          <Link to="/profile">Profile</Link> 
          
          <Link to="/login" style={{ background: "#007bff", color: "white", padding: "5px 10px", borderRadius: "4px", textDecoration: "none" }}>
            Login
          </Link>
        </div>
      </nav>

      {/* Dynamic Routing Structure */}
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
