'use strict';

let root = document.querySelector(':root') as HTMLElement;
let container = document.querySelector('.container') as HTMLDivElement;
let newTaskInput = document.getElementById('newTaskInput') as HTMLInputElement;
let taskForm = document.getElementById('newTaskForm') as HTMLFormElement;
let taskList = document.getElementById('taskList') as HTMLUListElement;
let taskButtons = document.querySelectorAll('.taskCheckButton') as NodeList;
let deleteAllButton = document.getElementById('deleteAll') as HTMLButtonElement;

deleteAllButton.addEventListener('click', function () {
    taskList.innerHTML = '';
    container.classList.add('taskListEmpty');
});

taskForm.addEventListener('submit', function (e) {

    e.preventDefault();
    let newTaskInputValue = newTaskInput.value;

    addTask(newTaskInputValue);

    newTaskInputValue ="";
    container.classList.remove('taskListEmpty');
});

function addTask(newTask: string) {

    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'taskItem');

    const newTrashButton = document.createElement("button") as HTMLButtonElement;
 
    newTrashButton.addEventListener("click", (event: Event) => {newTaskItem.remove();});
  
    const newTaskBio = document.createElement('span');
    newTaskBio.setAttribute('class', 'taskBio');

    newTaskBio.innerText = newTask;

    taskList.appendChild(newTaskItem);
    newTaskItem.appendChild(newTaskBio);
    newTaskItem.appendChild(newTrashButton);
}