let tasks = [];

function addTask() {
    let text = document.getElementById("taskInput").value;
    let date = document.getElementById("dueDate").value;

    if (text === "" || date === "") {
        alert("Please enter task and date");
        return;
    }

    tasks.push({
        text: text,
        date: date,
        done: false
    });

    document.getElementById("taskInput").value = "";
    document.getElementById("dueDate").value = "";

    showTasks("all");
}

function showTasks(type) {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        if (type === "completed" && !tasks[i].done) continue;
        if (type === "pending" && tasks[i].done) continue;

        let li = document.createElement("li");

        li.innerHTML = `
            <span onclick="toggleTask(${i})" class="${tasks[i].done ? 'completed' : ''}">
                ${tasks[i].text} (Due: ${tasks[i].date})
            </span>
            <button onclick="deleteTask(${i})">Delete</button>
        `;

        list.appendChild(li);
    }
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    showTasks("all");
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks("all");
}

function filterTasks(type) {
    showTasks(type);
}