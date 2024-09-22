// Selecting elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add new task
addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

// Function to add a task
function addTask(taskText) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="actions">
      <button class="complete-btn">✔</button>
      <button class="edit-btn">✏</button>
      <button class="delete-btn">❌</button>
    </div>
  `;
  taskList.appendChild(taskItem);

  // Add event listeners for buttons
  const completeBtn = taskItem.querySelector('.complete-btn');
  const editBtn = taskItem.querySelector('.edit-btn');
  const deleteBtn = taskItem.querySelector('.delete-btn');

  completeBtn.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });

  editBtn.addEventListener('click', function() {
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText && newTaskText.trim() !== '') {
      taskItem.querySelector('.task-text').innerText = newTaskText;
    }
  });

  deleteBtn.addEventListener('click', function() {
    taskItem.remove();
  });
}
