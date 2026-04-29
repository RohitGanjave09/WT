import { useState } from "react";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() => {
          if (name === "") {
            alert("Enter name");
            return;
          }
          addStudent(name);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddStudent;
