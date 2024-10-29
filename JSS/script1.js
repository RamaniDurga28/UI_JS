document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.classList.add('task');

    // Create checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');

    // Create span for task text
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    // Append checkbox, task text, and delete button to list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';

    // Mark task as complete with strikethrough when checkbox is clicked
    checkbox.addEventListener('change', () => {
      taskSpan.classList.toggle('completed', checkbox.checked);
    });

    // Delete task when delete button is clicked
    deleteBtn.addEventListener('click', () => {
      listItem.remove();
    });
  }

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
