let students = [];

document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;

    let message = document.getElementById("message");

    // ✅ Form Validation
    if (name === "" || email === "" || dob === "") {
        message.style.color = "red";
        message.innerText = "All fields are required!";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.innerText = "Invalid Email!";
        return;
    }

    message.style.color = "blue";
    message.innerText = "Saving student...";

    // ✅ Promise + setTimeout (simulate server)
    saveStudent({ name, email, dob })
        .then(() => {
            message.style.color = "green";
            message.innerText = "Student added successfully!";

            document.getElementById("studentForm").reset();
            displayStudents();
        })
        .catch(() => {
            message.style.color = "red";
            message.innerText = "Error saving student!";
        });
});

// Promise function
function saveStudent(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            students.push(student);
            resolve();
        }, 1000);
    });
}

// Display students
function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.dob}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
        list.innerHTML += row;
    });
}

// Delete function
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}