const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = taskText;

  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "delete-button";

  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

function clearAllTasks() {
  taskList.innerHTML = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

clearButton.addEventListener("click", clearAllTasks);
