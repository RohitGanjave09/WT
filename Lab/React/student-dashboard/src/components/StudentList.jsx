function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students</p>
      ) : (
        <ul>
          {students.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
