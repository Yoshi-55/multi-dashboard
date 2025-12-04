import type { FC } from 'react'
import { LuPlay, LuPause, LuRefreshCcw } from 'react-icons/lu'
import type { TimerDisplayProps } from '../hooks/types'

export const TimerDisplay: FC<TimerDisplayProps> = ({
  isRunning,
  timeLeft,
  isWorkSession,
  sessionsCompleted,
  formatTime,
  onStart,
  onStop,
  onReset,
}) => {
  return (
    <div className="col-span-10 lg:col-span-3 bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">52/17 rule</h2>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Completed: {sessionsCompleted}
        </span>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-4 text-center border border-gray-200">
        <div className="text-4xl font-bold text-gray-900 mb-1 font-mono">
          {formatTime(timeLeft)}
        </div>
        <p className="text-gray-600 text-sm">{isWorkSession ? 'Working' : 'Break'}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <div
          className={`rounded-lg p-2 border text-center ${
            isWorkSession ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
          }`}
        >
          <p className={`text-xs mb-1 font-semibold ${isWorkSession ? 'text-blue-700' : 'text-gray-600'}`}>
            Focus
          </p>
          <p className="text-gray-900 font-bold">52 min</p>
        </div>
        <div
          className={`rounded-lg p-2 border text-center ${
            !isWorkSession ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
          }`}
        >
          <p className={`text-xs mb-1 font-semibold ${!isWorkSession ? 'text-green-700' : 'text-gray-600'}`}>
            Break
          </p>
          <p className="text-gray-900 font-bold">17 min</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onStart}
          disabled={isRunning}
          className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-3 rounded-lg transition-colors text-sm flex items-center justify-center"
        >
          <LuPlay size={20} />
        </button>
        <button
          onClick={onStop}
          disabled={!isRunning}
          className="flex-1 bg-gray-400 hover:bg-gray-500 disabled:bg-gray-200 text-white font-semibold py-3 rounded-lg transition-colors text-sm flex items-center justify-center"
        >
          <LuPause size={20} />
        </button>
        <button
          onClick={onReset}
          className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 rounded-lg transition-colors text-sm flex items-center justify-center"
        >
          <LuRefreshCcw size={20} />
        </button>
      </div>
    </div>
  )
}
