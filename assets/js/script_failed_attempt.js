// console.dir(window.document);
// console.dir(window.document.querySelector("button"));
// var buttonE1 = document.querySelector("#save-task");
// console.log(buttonE1);

// debugger ;

        // var btn = window.document.querySelector("button");
        // // console.dir(btn);

        // buttonE1.addEventListener("click", function() {
        //     alert("button clicked");
        // });

var formEl = document.querySelector("#task-form");       // Picks/Get reference for the form element
var tasksToDoEl = document.querySelector("#tasks-to-do");

formEl.addEventListener("submit", createTaskHandler);

var createTaskHandler = function(event) {
    event.preventDefault();
    // console.log(event);
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    console.dir(taskNameInput);
    console.log();
    console.dir();



    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    listItemEl.appendChild(taskInfoEl);
    
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

// addTask = document.querySelector("#tasks-to-do")
// var newElemet = document.createElement("li");
// newElement.textContent("New Dynamic Task");
// addTask.appendChild(newElement) ;





// // By Pushing/Clicking "btn" Add Task, will add a ul    Ths is a new task
// var buttonEl = document.querySelector("#save-task");
// var tasksToDoEl = document.querySelector("#tasks-to-do");

// // buttonEl.addEventListener("click", function() {
// //   var listItemEl = document.createElement("li");
// //   listItemEl.className = "task-item";
// //   listItemEl.textContent = "This is a new task.";
// //   tasksToDoEl.appendChild(listItemEl);
// // });


// var createTaskHandler = function() {
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
//     listItemEl.textContent = "This is a new task.";
//     tasksToDoEl.appendChild(listItemEl);
// }

// buttonEl.addEventListener("click", createTaskHandler);