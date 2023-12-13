// интересно было, что сможет GPT, ниже его предложение,
// как видно, логика построена немного в другом алгоритме и нет
// функции обработки выполенных заданий...  


// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
      alert('Please enter a task');
      return;
    }

    // Create task element
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <span>${taskInput.value}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;

    // Append task to the list
    taskList.appendChild(taskElement);

    // Save tasks to local storage
    saveTasksToLocalStorage();

    // Clear the input field
    taskInput.value = '';
  }

  // Function to remove a task
  function removeTask(button) {
    const taskElement = button.parentElement;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskElement);

    // Save tasks to local storage
    saveTasksToLocalStorage();
  }

  // Function to save tasks to local storage
  function saveTasksToLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.children).map(task => task.children[0].innerText);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to load tasks from local storage
  function loadTasksFromLocalStorage() {
    const taskList = document.getElementById('taskList');
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      const tasks = JSON.parse(savedTasks);
      tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
          <span>${task}</span>
          <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskElement);
      });
    }
  }

  // Load tasks from local storage when the page is loaded
  window.onload = loadTasksFromLocalStorage;