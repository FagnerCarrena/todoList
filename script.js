function adicionar() {
  const taskInput = document.getElementById("taskInput");
  const taskDescription = taskInput.value;

  if (taskDescription.trim() === "") {
    alert("Por favor, digite uma descrição para a tarefa.");
    return;
  }

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.innerHTML = `
      <span>${taskDescription}</span>
      <button onclick="toggleTaskStatus(this)">Concluir</button>
      <button onclick="removeTask(this)">Excluir</button>
    `;

  taskList.appendChild(newTask);

  taskInput.value = "";
}

function toggleTaskStatus(button) {
  const taskItem = button.parentNode;
  taskItem.classList.toggle("completed");
}

function removeTask(button) {
  const taskItem = button.parentNode;
  const taskList = document.getElementById("taskList");
  taskList.removeChild(taskItem);
}
