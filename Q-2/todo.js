const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function render() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        const text = document.createElement('span');
        text.innerText = task.name;

        const toggleBtn = document.createElement('button');
        toggleBtn.innerText = task.completed ? "Undo" : "Done";
        toggleBtn.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            save();
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            save();
        };

        li.appendChild(text);
        li.appendChild(toggleBtn);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    render();
}

btn.onclick = () => {
    const value = input.value.trim();
    if (value) {
        tasks.push({name: value, completed: false});
        input.value = "";
        save();
    }
};

render();
