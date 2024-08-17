import React from 'react';

// Component for filtering tasks by status
const TaskFilter = ({ filter, setFilter }) => {
  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Not Completed', value: 'not_completed' },
  ];

  return (
    <div className="mb-4">
      {filterOptions.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`mr-2 px-4 py-2 rounded ${
            filter === value ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
