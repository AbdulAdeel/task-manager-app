import React, { useState } from 'react';

// Component for displaying and managing a single task
const TaskItem = ({ task, editTask, deleteTask, toggleCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, { ...task, name: taskName, description });
    }
    setIsEditing(prevState => !prevState);
  };

  const handleToggleCompleted = () => {
    toggleCompleted(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-200">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="border p-1 mr-2"
          />
        ) : (
          <span className={`text-lg ${task.status ? 'line-through' : ''}`}>
            {task.name}
          </span>
        )}
        <p className={`text-sm ${task.status ? 'line-through' : ''}`}>
          {isEditing ? (
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-1"
            />
          ) : (
            task.description
          )}
        </p>
      </div>
      <div className="flex">
        <button
          onClick={handleToggleCompleted}
          className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
        >
          {task.status ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={handleEdit}
          className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
