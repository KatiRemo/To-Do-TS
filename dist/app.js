'use strict';
var root = document.querySelector(':root');
var container = document.querySelector('.container');
var newTaskInput = document.getElementById('newTaskInput');
var taskForm = document.getElementById('newTaskForm');
var taskList = document.getElementById('taskList');
var taskButtons = document.querySelectorAll('.taskCheckButton');
var deleteAllButton = document.getElementById('deleteAll');
deleteAllButton.addEventListener('click', function () {
    taskList.innerHTML = '';
    container.classList.add('taskListEmpty');
});
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var newTaskInputValue = newTaskInput.value;
    addTask(newTaskInputValue);
    newTaskInputValue = "";
    container.classList.remove('taskListEmpty');
});
function addTask(newTask) {
    var newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'taskItem');
    var newTrashButton = document.createElement("button");
    newTrashButton.addEventListener("click", function (event) { newTaskItem.remove(); });
    var newTaskBio = document.createElement('span');
    newTaskBio.setAttribute('class', 'taskBio');
    newTaskBio.innerText = newTask;
    taskList.appendChild(newTaskItem);
    newTaskItem.appendChild(newTaskBio);
    newTaskItem.appendChild(newTrashButton);
}
