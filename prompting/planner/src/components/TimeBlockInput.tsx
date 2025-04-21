import React, { useState } from 'react';
import { TimeBlock } from '../types';

interface TimeBlockInputProps {
  timeBlocks: TimeBlock[];
  setTimeBlocks: React.Dispatch<React.SetStateAction<TimeBlock[]>>;
}

const TimeBlockInput: React.FC<TimeBlockInputProps> = ({ timeBlocks, setTimeBlocks }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTimeBlock: TimeBlock = {
      id: Date.now().toString(),
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    };
    setTimeBlocks([...timeBlocks, newTimeBlock]);
    setStartTime('');
    setEndTime('');
  };

  return (
    <div className="time-block-input">
      <h2>Add Time Block</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
        <button type="submit">Add Time Block</button>
      </form>
    </div>
  );
};

export default TimeBlockInput; 