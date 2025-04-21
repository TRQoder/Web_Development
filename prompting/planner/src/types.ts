export interface Task {
  id: string;
  title: string;
  duration: number; // in minutes
  priority: number; // 1-5
  deadline?: Date;
}

export interface TimeBlock {
  id: string;
  startTime: Date;
  endTime: Date;
}

export interface ScheduledTask extends Task {
  startTime: Date;
  endTime: Date;
} 