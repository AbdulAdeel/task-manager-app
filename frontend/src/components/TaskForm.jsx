import React, { useState } from 'react';

// Component for the form to add the name and description of the tasks
const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;

    const newTask = {
      name: taskName,
      description,
      status: false,
    };

    addTask(newTask);
    resetForm();
  };

  const resetForm = () => {
    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
