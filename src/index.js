document.addEventListener("DOMContentLoaded", () => {
 
  const newTaskForm  = document.getElementById('create-task-form');
  const newTaskPriority = document.getElementById('new-tasl-priority');
  const newTaskUI = document.getElementById('tasks');

  newTaskForm.addEventListener('submit', createNewTask);
});

const createNewTask = e => {
  e.preventDefault();

  const newTaskDescription = document.getElementById('new-task-descrition');
  const newTask = document.createElement('li');
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  e.target.reset();
};

const appendNewTask = task => {
  document.getElementById('tasks').appendChild(task)
}

