// Initialize tasks array
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Check if the input is empty
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task object
    const task = {
        id: Date.now(),
        text: taskInput.value,
        completed: false,
    };

    // Add the new task to the tasks array
    tasks.push(task);

    // Render the updated list of tasks
    renderTasks();

    // Clear the input field
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(id) {
    // Remove the task with the given id from the tasks array
    tasks = tasks.filter(task => task.id !== id);

    // Render the updated list of tasks
    renderTasks();
}

// Function to toggle the completion status of a task
function toggleTaskStatus(id) {
    // Toggle the completion status of the task with the given id
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });

    // Render the updated list of tasks
    renderTasks();
}

// Function to clear completed tasks
function clearCompletedTasks() {
    // Remove completed tasks from the tasks array
    tasks = tasks.filter(task => !task.completed);

    // Render the updated list of tasks
    renderTasks();
}

// Function to render tasks in the HTML
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Iterate through tasks and create HTML elements for each
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <!-- Display task text with completed class if task is completed -->
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <!-- Button to delete a task -->
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            <!-- Checkbox to toggle the completion status of a task -->
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskStatus(${task.id})">
        `;

        // Append the task item to the task list
        taskList.appendChild(taskItem);
    });
}

// Initial rendering of tasks when the page loads
renderTasks();
