import React from "react";
import TodoList from "./TodoList"; // Import the TodoList component
import "./App.css"; // Keep this for styling

function App() {
  return (
    <div className="App">
<div className="app-title">Todo List App</div>
<TodoList />
    </div>
  );
}

export default App;
