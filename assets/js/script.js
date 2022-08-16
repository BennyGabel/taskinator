console.dir(window.document);
console.dir(window.document.querySelector("button"));
var buttonE1 = document.querySelector("#save-task");
console.log(buttonE1);

// debugger ;

var btn = window.document.querySelector("button");
console.dir(btn);

buttonE1.addEventListener("click", function() {
    alert("button clicked");
});

// addTask = document.querySelector("#tasks-to-do")
// var newElemet = document.createElement("li");
// newElement.textContent("New Dynamic Task");
// addTask.appendChild(newElement) ;

var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello";
taskItemEl.className = "task-item";
tasksToDoEl.appendChild(taskItemEl);



// By Pushing/Clicking "btn" Add Task, will add a ul    Ths is a new task
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// buttonEl.addEventListener("click", function() {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
// });


var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);