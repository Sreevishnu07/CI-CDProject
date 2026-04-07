const API = "http://localhost:8080";

// Fetch tasks
async function fetchTasks() {
  const res = await fetch(`${API}/tasks`);
  const data = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  data.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;
    list.appendChild(li);
  });
}

// Add task
async function addTask() {
  const input = document.getElementById("taskInput");

  if (!input.value) return;

  await fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: input.value })
  });

  input.value = "";
  fetchTasks();
}

// Initial load
fetchTasks();

// 🔥 IMPORTANT (fix for button click)
window.addTask = addTask;
