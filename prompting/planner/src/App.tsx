import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TimeBlockInput from './components/TimeBlockInput';
import DailyPlan from './components/DailyPlan';
import { Task, TimeBlock, ScheduledTask } from './types';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([]);
  const [scheduledTasks, setScheduledTasks] = useState<ScheduledTask[]>([]);

  const generatePlan = () => {
    // Sort tasks by priority and deadline
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a.priority !== b.priority) return b.priority - a.priority;
      if (a.deadline && b.deadline) return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      return 0;
    });

    // Basic scheduling algorithm
    const newScheduledTasks: ScheduledTask[] = [];
    let currentTimeBlockIndex = 0;

    sortedTasks.forEach(task => {
      if (currentTimeBlockIndex < timeBlocks.length) {
        const timeBlock = timeBlocks[currentTimeBlockIndex];
        newScheduledTasks.push({
          ...task,
          startTime: timeBlock.startTime,
          endTime: timeBlock.endTime,
        });
        currentTimeBlockIndex++;
      }
    });

    setScheduledTasks(newScheduledTasks);
  };

  return (
    <div className="app">
      <h1>🧠 Smart Task Planner</h1>
      <div className="input-section">
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <TimeBlockInput timeBlocks={timeBlocks} setTimeBlocks={setTimeBlocks} />
      </div>
      <button className="generate-button" onClick={generatePlan}>
        Generate Plan
      </button>
      <DailyPlan scheduledTasks={scheduledTasks} />
    </div>
  );
}

export default App; 