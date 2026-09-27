```javascript
// ========================================
// TASKFLOW - TODO APP
// ========================================


// ========================================
// GET HTML ELEMENTS
// ========================================

const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const categoryInput = document.getElementById("categoryInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(".filter-btn");

const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const themeBtn = document.getElementById("themeBtn");


// ========================================
// TASK DATA
// ========================================

let tasks = JSON.parse(localStorage.getItem("taskflowTasks")) || [];

let currentFilter = "all";


// ========================================
// SAVE TASKS
// ========================================

function saveTasks() {

    localStorage.setItem(
        "taskflowTasks",
        JSON.stringify(tasks)
    );

}


// ========================================
// ADD TASK
// ========================================

function addTask() {

    const title = taskInput.value.trim();

    if (title === "") {

        alert("Please enter a task.");

        taskInput.focus();

        return;
    }


    const task = {

        id: Date.now(),

        title: title,

        priority: priorityInput.value,

        category: categoryInput.value,

        completed: false

    };


    tasks.push(task);


    saveTasks();

    renderTasks();

    updateProgress();


    // Clear input

    taskInput.value = "";

    taskInput.focus();

}


// ========================================
// ADD TASK BUTTON
// ========================================

addBtn.addEventListener("click", addTask);


// ========================================
// ENTER KEY TO ADD TASK
// ========================================

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// ========================================
// RENDER TASKS
// ========================================

function renderTasks() {

    taskList.innerHTML = "";


    const searchText =
        searchInput.value.toLowerCase().trim();


    let filteredTasks = tasks.filter(function (task) {


        // Search

        const matchesSearch =
            task.title.toLowe
```
