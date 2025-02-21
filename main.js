document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('ingresar-tarea');
    const taskList = document.getElementById('lista-de-tareas');
    const addButton = document.getElementById('crear-tarea');

    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = task;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        taskItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        taskItem.appendChild(deleteButton);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';
        taskItem.appendChild(completeButton);

        taskList.appendChild(taskItem);

        editButton.addEventListener('click', () => editTask(taskItem));
        deleteButton.addEventListener('click', () => deleteTask(taskItem));
        completeButton.addEventListener('click', () => completeTask(taskItem));
    }

    function editTask(taskItem) {
        const newTask = prompt('Edita la tarea:', taskItem.firstChild.textContent);
        if (newTask !== null && newTask !== '') {
            taskItem.firstChild.textContent = newTask;
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function completeTask(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
