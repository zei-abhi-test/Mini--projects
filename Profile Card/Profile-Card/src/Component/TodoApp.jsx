import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [taskText, setTaskText] = useState("");
  const [searchText, setSearchText] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText.trim()
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h2>Todo App</h2>

      <div style={{ marginBottom: 15 }}>
        <label>Add Task: </label>
        <input
          type="text"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button onClick={handleAdd} style={{ marginLeft: 10 }}>
          Add
        </button>
      </div>

      <div style={{ marginBottom: 15 }}>
        <label>Search Task: </label>
        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>

      {filteredTasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        filteredTasks.map(task => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}
