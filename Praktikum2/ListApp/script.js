const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event untuk menambah task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Event untuk tombol edit
    li.querySelector('.edit').addEventListener('click', () => editTask(li));

    // Event untuk tombol delete
    li.querySelector('.delete').addEventListener('click', () => li.remove());

    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(taskItem) {
    const taskText = taskItem.querySelector('span').innerText;
    const newText = prompt('Edit Task', taskText);
    if (newText !== null && newText.trim() !== '') {
        taskItem.querySelector('span').innerText = newText;
    }
}
