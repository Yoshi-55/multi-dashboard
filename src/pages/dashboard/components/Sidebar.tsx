import type { FC } from 'react'
import { useState } from 'react'

type NavTab = 'dashboard' | 'task'

const Sidebar: FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard')

  return (
    <aside className="w-64 bg-white shadow-md border-r border-gray-200 p-6 h-screen sticky top-0 overflow-y-auto flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Multi Dashboard
        </h2>
        <p className="text-gray-600 text-xs mt-2">
          Integrated workspace
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`text-left font-semibold text-sm transition-colors ${
            activeTab === 'dashboard'
              ? 'text-blue-600'
              : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('task')}
          className={`text-left font-semibold text-sm transition-colors ${
            activeTab === 'task'
              ? 'text-blue-600'
              : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          Task
        </button>
      </div>

      <div className="flex-1"></div>

      <div className="border-t border-gray-200 pt-6">
        <div className="space-y-3">
          <a
            href="#"
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Settings
          </a>
          <a
            href="#"
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Help
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Dashboard<br />
          v1.0.0
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
