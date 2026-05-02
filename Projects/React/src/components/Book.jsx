// Concept 14: Props (Data Passing) - Parent to Child
// Concept 15: Destructuring exact props we need
function Book({ bookData, borrowAction }) {
  
  return (
    <div style={{ 
      border: "1px solid #ddd", 
      padding: "15px", 
      borderRadius: "8px", 
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      
      <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>{bookData.title}</h3>
      
      <p style={{ margin: "0 0 10px 0", color: "#666", fontSize: "0.9rem" }}>
        By: {bookData.author}
      </p>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ 
          color: bookData.isAvailable ? "green" : "red", 
          fontWeight: "bold", 
          fontSize: "0.8rem" 
        }}>
          {bookData.isAvailable ? "Available" : "Checked Out"}
        </span>
        
        {bookData.isAvailable && (
          <button 
            onClick={borrowAction} 
            style={{ 
              backgroundColor: "#007bff", 
              color: "white", 
              border: "none", 
              padding: "6px 12px", 
              borderRadius: "4px", 
              cursor: "pointer" 
            }}
          >
            Borrow
          </button>
        )}
      </div>

    </div>
  );
}

export default Book;
