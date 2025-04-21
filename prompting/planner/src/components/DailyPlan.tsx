import React from 'react';
import { ScheduledTask } from '../types';

interface DailyPlanProps {
  scheduledTasks: ScheduledTask[];
}

const DailyPlan: React.FC<DailyPlanProps> = ({ scheduledTasks }) => {
  const motivationalMessages = [
    "You've got this! 💪",
    "One step at a time! 👣",
    "Stay focused! 🎯",
    "Making progress! 🌟",
  ];

  return (
    <div className="daily-plan">
      <h2>Your Daily Plan</h2>
      {scheduledTasks.length === 0 ? (
        <p>Add tasks and time blocks to generate your plan!</p>
      ) : (
        <div className="scheduled-tasks">
          {scheduledTasks.map((task) => (
            <div key={task.id} className="scheduled-task">
              <h3>{task.title}</h3>
              <p>
                {task.startTime.toLocaleTimeString()} -{' '}
                {task.endTime.toLocaleTimeString()}
              </p>
              <p className="motivation">
                {motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyPlan; 