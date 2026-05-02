import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (username.trim() === "") return;

    // Simulating user login by saving to LocalStorage
    localStorage.setItem("libraryUser", username);

    // Programmatic routing to the user's profile
    navigate("/profile");
  }

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login</h2>
      <p>Enter your name to access your account.</p>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "15px" }}
        />
        <button 
          onClick={handleLogin}
          style={{ 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            borderRadius: "4px", 
            cursor: "pointer",
            width: "100%"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
