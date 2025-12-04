import type { FC } from 'react'
import { useTimer } from '../hooks/useTimer'
import { TimerDisplay } from '../components/TimerDisplay'

export const Timer: FC = () => {
  const {
    isRunning,
    timeLeft,
    isWorkSession,
    sessionsCompleted,
    handleStart,
    handleStop,
    handleReset,
    formatTime,
  } = useTimer()

  return (
    <TimerDisplay
      isRunning={isRunning}
      timeLeft={timeLeft}
      isWorkSession={isWorkSession}
      sessionsCompleted={sessionsCompleted}
      formatTime={formatTime}
      onStart={handleStart}
      onStop={handleStop}
      onReset={handleReset}
    />
  )
}
