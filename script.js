let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;
  tasks.push(task);
  input.value = "";
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    list.innerHTML += `<li>${t} 
      <button onclick="editTask(${i})">Edit</button>
      <button onclick="deleteTask(${i})">Delete</button></li>`;
  });
}

function editTask(i) {
  const newTask = prompt("Edit task:", tasks[i]);
  if (newTask !== null && newTask.trim() !== "") tasks[i] = newTask.trim();
  displayTasks();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  displayTasks();
}
