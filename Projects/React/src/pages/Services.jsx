import { useState } from "react";
import Book from "../components/Book";
import { useNavigate } from "react-router-dom";

function Services() {
  const [borrowedList, setBorrowedList] = useState(() => {
    return JSON.parse(localStorage.getItem("borrowedBooks")) || [];
  });
  const navigate = useNavigate();

  const bookCatalog = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true },
    { id: 2, title: "1984", author: "George Orwell", isAvailable: true },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
  ];

  /* 
     Dates Factor logic 
     Note: Now accepts 'book' object as an argument instead of nothing
  */
  function processBorrow(book) {
    const today = new Date();
    
    // Due Date is logically 14 Days from today
    const due = new Date();
    due.setDate(today.getDate() + 14); 

    const newRecord = {
      title: book.title,
      borrowDate: today.toLocaleDateString(),
      dueDate: due.toLocaleDateString()
    };

    // React State update
    const updatedList = [...borrowedList, newRecord];
    setBorrowedList(updatedList);
    
    // Save to localStorage so Profile page can read it across routes
    localStorage.setItem("borrowedBooks", JSON.stringify(updatedList));

    alert(`Successfully borrowed ${book.title}! Automatically due back on ${newRecord.dueDate}`);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>Book Catalog</h2>
        <div style={{ background: "#007bff", color: "white", padding: "5px 10px", borderRadius: "20px", fontWeight: "bold" }}>
          Borrowed: {borrowedList.length}
        </div>
      </div>

      <p>Browse our collection and borrow books.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "15px", marginTop: "20px" }}>
        
        {bookCatalog.map((book) => (
          <Book 
             key={book.id} 
             bookData={book} 
             borrowAction={() => processBorrow(book)} 
          />
        ))}
        
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className="btn" onClick={() => navigate("/profile")} style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          View My Books
        </button>
      </div>

    </div>
  );
}

export default Services;
