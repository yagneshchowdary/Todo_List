function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInput.value !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskList = document.getElementById("task-list");
    const taskToRemove = button.parentElement;
    taskList.removeChild(taskToRemove);
}