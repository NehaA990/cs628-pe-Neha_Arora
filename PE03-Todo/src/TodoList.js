import React from 'react';
import TodoTask from './TodoTask';

// Renders a list of todo tasks
const TodoList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="todo-list">
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            <TodoTask task={task} onDelete={() => onDeleteTask(task)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;