import React from 'react';
import TaskItem from './TaskItem';

// Component for displaying the list of tasks with filtering options
const TaskList = ({ tasks, filter, editTask, deleteTask, toggleCompleted }) => {
  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.status);
      case 'not_completed':
        return tasks.filter(task => !task.status);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
