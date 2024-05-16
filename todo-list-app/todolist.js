
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function displayTasks() {
    document.getElementById('taskList').innerHTML = '';
    tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
                <input type="checkbox" onchange="toggleCompleted(${index})" ${task.completed ? 'checked' : ''}>
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button onclick="deleteTask(${index})">Delete</button>
            `;
    document.getElementById('taskList').appendChild(taskElement);
});
}

    function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
}
}

    function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

    function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
    displayTasks();