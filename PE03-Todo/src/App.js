import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  // State for tasks and new task input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add new task to the list
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Remove task from the list
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>ToDo List</h1>

        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={handleAddTask}>Add Task</button>

        <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;