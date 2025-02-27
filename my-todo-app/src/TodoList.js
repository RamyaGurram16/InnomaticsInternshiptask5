import React, { useState } from "react";
import "./App.css"; // Keeping existing styles

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, text: editText } : task
    ));
    setEditingTask(null);
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTask === task.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
                <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>
              
            )}

            {editingTask === task.id ? (
              <button onClick={() => saveEdit(task.id)}>Save</button>
            ) : (
              <>
                <button onClick={() => toggleComplete(task.id)}>✔</button>
                <button onClick={() => startEditing(task)}>✏</button>
                <button onClick={() => deleteTask(task.id)}>🗑</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
