import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user] = useState(() => {
    return localStorage.getItem("libraryUser") || "Guest";
  });
  const [borrowed] = useState(() => {
    return JSON.parse(localStorage.getItem("borrowedBooks")) || [];
  });
  const navigate = useNavigate();

  function handleLogout() {
      localStorage.removeItem("libraryUser");
      navigate("/login");
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2>Profile: <span style={{ color: "#007bff" }}>{user}</span></h2>
          <button 
            style={{ background: "#dc3545", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }} 
            onClick={handleLogout}
          >
            Logout
          </button>
      </div>
      
      <h3>Your Borrowed Books</h3>
      
      {borrowed.length === 0 ? (
        <p style={{ color: "#666" }}>You haven't borrowed any books yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "10px" }}>
          {borrowed.map((item, index) => (
            <div key={index} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", backgroundColor: "#f8f9fa" }}>
              <h4 style={{ margin: "0 0 8px 0" }}>{item.title}</h4>
              <p style={{ margin: "0", color: "#666", fontSize: "0.9rem" }}>
                Borrowed: {item.borrowDate} | Due: {item.dueDate}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Profile;
