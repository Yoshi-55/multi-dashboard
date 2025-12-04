export interface TimerDisplayProps {
  isRunning: boolean;
  timeLeft: number;
  isWorkSession: boolean;
  sessionsCompleted: number;
  formatTime: (seconds: number) => string;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export interface TimerState {
  isRunning: boolean;
  timeLeft: number;
  isWorkSession: boolean;
  sessionsCompleted: number;
}

export interface TimerHandlers {
  handleStart: () => void;
  handleStop: () => void;
  handleReset: () => void;
  formatTime: (seconds: number) => string;
}
