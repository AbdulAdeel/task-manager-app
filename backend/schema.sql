-- Create database
CREATE DATABASE IF NOT EXISTS task_manager;

-- Use the created database
USE task_manager;

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status BOOLEAN NOT NULL DEFAULT FALSE
);

-- Insert some sample data (if needed)
INSERT INTO tasks (name, description, status) VALUES
('Task 1', 'Description for Task 1', FALSE),
('Task 2', 'Description for Task 2', TRUE),
('Task 3', 'Description for Task 3', FALSE);
