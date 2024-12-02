//varables
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Adding event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//Functions
//adding tasks to do
function addTodo(e) {
  //preventing page to refresh
  e.preventDefault();

  //preventing an empty input from adding
  if (todoInput.value === "") return;

  //creating div for todos
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //creating list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //creating buttons
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Appending todoDiv to the todoList
  todoList.appendChild(todoDiv);

  //clearing the input
  todoInput.value = "";
}

//delete and check tasks
function deleteCheck(e) {
  const item = e.target;
  //delete logic
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  //check logic
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//filter todo
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "done":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "undone":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
