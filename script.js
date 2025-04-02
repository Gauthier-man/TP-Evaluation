document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} 
        <button onclick="editTask(this)">Modifier</button> 
        <button onclick="deleteTask(this)">Supprimer</button>`;

    document.getElementById("taskList").appendChild(li);
    saveTasks();
    taskInput.value = "";
}

function editTask(button) {
    let newText = prompt("Modifier la tâche :", button.parentElement.firstChild.textContent.trim());
    if (newText !== null && newText.trim() !== "") {
        button.parentElement.firstChild.textContent = newText + " ";
        saveTasks();
    }
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent.trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} 
            <button onclick="editTask(this)">Modifier</button> 
            <button onclick="deleteTask(this)">Supprimer</button>`;
        document.getElementById("taskList").appendChild(li);
    });
}
