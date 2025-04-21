import React, { useState } from 'react';
import { Task } from '../types';

interface TaskInputProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskInput: React.FC<TaskInputProps> = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [priority, setPriority] = useState('3');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      duration: parseInt(duration),
      priority: parseInt(priority),
      deadline: deadline ? new Date(deadline) : undefined,
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDuration('');
    setPriority('3');
    setDeadline('');
  };

  return (
    <div className="task-input">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="1">Low Priority</option>
          <option value="3">Medium Priority</option>
          <option value="5">High Priority</option>
        </select>
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput; 