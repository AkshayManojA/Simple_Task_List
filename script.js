const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeLastTaskBtn = document.getElementById('removeLastTaskBtn');
const taskList = document.getElementById('taskList');

// Initialize an empty array 
const tasks = [];

//updating tasks in the task list

function updateTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task,index) => {
        const li = document.createElement('li');
        li.textContent = `${index +1}.${task}`;
        taskList.appendChild(li);
    });
}

//Adding a new task

 addTaskBtn.addEventListener('click', () => {
     const newTask = taskInput.value.trim();
     if (newTask) {
        tasks.push(newTask);
        taskInput.value = '';
        updateTasks();
    }
});

//Removing the last task

removeLastTaskBtn.addEventListener('click', () => {
    tasks.pop();
    updateTasks();
});
