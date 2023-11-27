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
      <input type="checkbox" onchange="adicionaChequed(this)">
      <button onclick="remover(this)">Excluir</button>
    `;

  taskList.appendChild(newTask);

  taskInput.value = "";
}

function adicionaChequed(checkbox) {
  const verifica = checkbox.parentNode.querySelector("span");
  verifica.classList.toggle("completed", checkbox.checked);
}

function remover(button) {
  const excluir = button.parentNode;
  const taskList = document.getElementById("taskList");
  taskList.removeChild(excluir);
}
