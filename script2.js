document.addEventListener("DOMContentLoaded", loadTasks); // Charger les tâches au chargement de la page

function addTask() {
    let taskInput = document.getElementById("taskInput");
     // Récupérer la valeur saisie,
    let taskText = taskInput.value.trim();
    if (taskText === "") return; // Vérifie si le champ est vide

    let li = document.createElement("li");
    // Ajoute la tâche avec les boutons Modifier et Supprimer
    li.innerHTML = `${taskText} 
        <button onclick="editTask(this)">Modifier</button> 
        <button onclick="deleteTask(this)">Supprimer</button>`;

    document.getElementById("taskList").appendChild(li);
    saveTasks(); // Sauvegarde la liste des tâches
    taskInput.value = ""; // Réinitialise le champ d'entrée
}

function editTask(button) {
    let newText = prompt("Modifier la tâche :", button.parentElement.firstChild.textContent.trim());
    if (newText !== null && newText.trim() !== "") {
        button.parentElement.firstChild.textContent = newText + " "; // Met à jour le texte de la tâche
        saveTasks(); // Sauvegarde les modifications
    }
}

function deleteTask(button) {
    button.parentElement.remove(); // Supprime l'élément tâche
    saveTasks(); // Sauvegarde après suppression
}

function saveTasks() {
    let tasks = [];
    // Parcours toutes les tâches et les ajoute au tableau
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent.trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Stocke les tâches dans le localStorage
}

function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || []; // Récupère les tâches stockées
    savedTasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} 
            <button onclick="editTask(this)">Modifier</button> 
            <button onclick="deleteTask(this)">Supprimer</button>`;
        document.getElementById("taskList").appendChild(li);
    });
}
