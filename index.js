const todoInput = document.getElementById('todo-input'); // Get the todo input element
const addButton = document.getElementById('add-button'); // Get the add button element
const todoList = document.getElementById('todo-list'); // Get the todo list element
const countSpan = document.getElementById('count'); // Get the task count span element

// Add a new todo item
addButton.addEventListener('click', function() {
  const todoText = todoInput.value.trim(); // Get the trimmed value of the todo input
  if (todoText !== '') {
    const todoItem = createTodoItem(todoText); // Create a new todo item
    todoList.appendChild(todoItem); // Append the todo item to the todo list
    updateTaskCount(); // Update the task count
    todoInput.value = ''; // Clear the todo input
  }
});

// Create a new todo item
function createTodoItem(text) {
  const todoItem = document.createElement('li'); // Create a new list item element
  todoItem.className = 'todo-item'; // Set the class name for the todo item

  const checkbox = document.createElement('input'); // Create a new input element for the checkbox
  checkbox.type = 'checkbox'; // Set the input type to checkbox
  checkbox.addEventListener('change', function() {
    const task = this.nextElementSibling; // Get the next sibling element (task)
    task.classList.toggle('completed'); // Toggle the 'completed' class on the task element
  });

  const task = document.createElement('span'); // Create a new span element for the task
  task.className = 'task'; // Set the class name for the task
  task.textContent = text; // Set the text content of the task

  const deleteButton = document.createElement('button'); // Create a new button element for delete
  deleteButton.className = 'delete-button'; // Set the class name for the delete button
  deleteButton.innerHTML = '<i class="fas fa-times"></i>'; // Use the 'times' icon from Font Awesome for delete

  deleteButton.addEventListener('click', function() {
    const todoItem = this.parentElement; // Get the parent element of the delete button (todo item)
    todoList.removeChild(todoItem); // Remove the todo item from the todo list
    updateTaskCount(); // Update the task count
  });

  todoItem.appendChild(checkbox); // Append the checkbox to the todo item
  todoItem.appendChild(task); // Append the task to the todo item
  todoItem.appendChild(deleteButton); // Append the delete button to the todo item

  return todoItem; // Return the created todo item
}

// Update the total task count
function updateTaskCount() {
  const taskCount = todoList.childElementCount; // Get the number of child elements (todo items) in the todo list
  countSpan.textContent = taskCount; // Set the task count in the count span
}
