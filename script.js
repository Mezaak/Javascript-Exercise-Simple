const task = document.getElementById("task");
const todo = document.getElementById("todo");
const addButton = document.getElementById("add-button");
const deleteButton = document.getElementById("delete-button");

addButton.addEventListener("click", function () {
  if (task.value != "") {
    const list = document.createElement("li");
    list.innerText = task.value;
    list.classList.add("list");
    todo.appendChild(list);
    task.value = "";
  }
});

deleteButton.addEventListener("click", function () {
  const li = document.getElementsByClassName("list")[0];
  todo.removeChild(li);
});
