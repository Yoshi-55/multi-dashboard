import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:drop-shadow-lg transition-all">
            <img src={viteLogo} className="h-24 hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:drop-shadow-lg transition-all">
            <img src={reactLogo} className="h-24 hover:scale-110 transition-transform" alt="React logo" />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Vite + React + Tailwind</h1>

        <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4"
          >
            Count: {count}
          </button>
          <p className="text-slate-300">
            Edit <code className="bg-slate-600 px-2 py-1 rounded">src/App.tsx</code> to see changes with Tailwind CSS
          </p>
        </div>

        <p className="text-slate-400 mt-8 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
