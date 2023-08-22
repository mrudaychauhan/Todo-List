const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <button>Delete</button>
  `;

  const deleteButton = taskItem.querySelector("button");
  deleteButton.addEventListener("click", () => deleteTask(taskItem));

  const checkbox = taskItem.querySelector("input[type='checkbox']");
  checkbox.addEventListener("change", () => toggleLineThrough(checkbox, taskItem));

  taskList.appendChild(taskItem);
  taskInput.value = "";
}

// Function to delete a task item
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

// Function to toggle the line-through style based on checkbox state

function toggleLineThrough(checkbox, taskItem) {
  const taskText = taskItem.querySelector("span");
  if (checkbox.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
}