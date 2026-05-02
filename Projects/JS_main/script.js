// script.js
// Student data array (non-primitive, stored in heap)
let students = [
  { name: "Aarav", marks: 85 },
  { name: "Diya", marks: 42 },
  { name: "Rohan", marks: 38 },
  { name: "Meera", marks: 91 }
];

// DOM elements
const studentNameInput = document.getElementById('studentName');
const studentMarksInput = document.getElementById('studentMarks');
const addBtn = document.getElementById('addBtn');
const totalCountSpan = document.getElementById('totalCount');
const avgMarksSpan = document.getElementById('avgMarks');
const passedCountSpan = document.getElementById('passedCount');
const outputArea = document.getElementById('outputArea');
const studentListUl = document.getElementById('studentList');

// Helper: update UI (stats + list)
function updateUI() {
  // Update stats using reduce and filter
  const total = students.length;
  const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
  const avg = total === 0 ? 0 : (totalMarks / total).toFixed(1);
  const passed = students.filter(s => s.marks >= 40).length;
  
  totalCountSpan.textContent = total;
  avgMarksSpan.textContent = avg;
  passedCountSpan.textContent = passed;
  
  // Render list using map
  if (students.length === 0) {
    studentListUl.innerHTML = '<li style="text-align:center;">No students added</li>';
    return;
  }
  studentListUl.innerHTML = students.map((student, idx) => `
    <li>
      <span class="name">${student.name}</span>
      <span class="marks">${student.marks} marks</span>
    </li>
  `).join('');
}

// Add new student
addBtn.addEventListener('click', () => {
  const name = studentNameInput.value.trim();
  const marks = parseInt(studentMarksInput.value);
  if (name === "" || isNaN(marks) || marks < 0 || marks > 100) {
    outputArea.innerHTML = "❌ Please enter valid name and marks (0-100)";
    return;
  }
  students.push({ name, marks });
  studentNameInput.value = "";
  studentMarksInput.value = "";
  updateUI();
  outputArea.innerHTML = `✅ Added ${name} with ${marks} marks.`;
});

// Show all students (using spread/rest demo)
document.getElementById('showAllBtn').addEventListener('click', () => {
  if (students.length === 0) {
    outputArea.innerHTML = "📭 No students to show.";
    return;
  }
  const allNames = students.map(s => `${s.name} (${s.marks})`).join(', ');
  outputArea.innerHTML = `📋 All students: ${allNames}`;
});

// Map: add 5 grace marks (demonstrates immutability with map)
document.getElementById('mapBonusBtn').addEventListener('click', () => {
  if (students.length === 0) {
    outputArea.innerHTML = "⚠️ Add students first.";
    return;
  }
  const updated = students.map(s => ({ ...s, marks: s.marks + 5 }));
  outputArea.innerHTML = `<strong>📊 Map (grace marks +5):</strong><br>${updated.map(s => `${s.name} → ${s.marks}`).join('<br>')}<br><br>⭐ Original array unchanged.`;
});

// Filter: show only passed students (>=40)
document.getElementById('filterPassBtn').addEventListener('click', () => {
  const passed = students.filter(s => s.marks >= 40);
  if (passed.length === 0) {
    outputArea.innerHTML = "❌ No passed students (marks >= 40).";
    return;
  }
  outputArea.innerHTML = `<strong>🎯 Filter (passed only):</strong><br>${passed.map(s => `${s.name} - ${s.marks}`).join('<br>')}`;
});

// Reduce: total marks of all students
document.getElementById('reduceTotalBtn').addEventListener('click', () => {
  const total = students.reduce((sum, s) => sum + s.marks, 0);
  outputArea.innerHTML = `📉 Reduce → Total marks of all students: <strong>${total}</strong>`;
});

// Destructuring: first student object
document.getElementById('destructureBtn').addEventListener('click', () => {
  if (students.length === 0) {
    outputArea.innerHTML = "⚠️ No students to destructure.";
    return;
  }
  const { name, marks } = students[0];
  outputArea.innerHTML = `🔓 Object destructuring (first student):<br>Name: ${name}<br>Marks: ${marks}<br><br>✨ Extracted using { name, marks } = students[0]`;
});

// Async demo: Promise with setTimeout
document.getElementById('asyncDemoBtn').addEventListener('click', () => {
  outputArea.innerHTML = "⏳ Promise pending... calculating average in 2 seconds...";
  const asyncPromise = new Promise((resolve) => {
    setTimeout(() => {
      const total = students.reduce((sum, s) => sum + s.marks, 0);
      const avg = students.length ? (total / students.length).toFixed(1) : 0;
      resolve(`✅ Async result: Average marks = ${avg}`);
    }, 2000);
  });
  asyncPromise.then(msg => {
    outputArea.innerHTML = msg + "<br>✨ Real-life: async operations (API calls, timers)";
  });
});

// Initial render
updateUI();
outputArea.innerHTML = "💡 Click any button above to see JavaScript concepts: map, filter, reduce, destructuring, promises, and more!";

// Console examples for scope, let/const
console.log("--- JS Concepts Demo ---");
let blockScoped = "I'm let";
if (true) {
  let blockScoped = "inner block";
  console.log(blockScoped);
}
console.log("Global still:", blockScoped);
console.log("Typeof example:", typeof students);