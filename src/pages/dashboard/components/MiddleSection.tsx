import type { FC } from 'react'

const MiddleSection: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">🎵 音楽プレイヤー</h2>
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            準備中
          </span>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-4 flex items-center justify-center border border-gray-200">
          <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-3xl">🎧</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-gray-900 font-bold text-lg truncate">トラック名</h3>
          <p className="text-gray-600 text-sm truncate">アーティスト名</p>
          <div className="bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
            <div className="bg-blue-500 h-full" style={{ width: '35%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>1:30</span>
            <span>4:15</span>
          </div>
        </div>

        <div className="flex gap-2 justify-center mb-4">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            ⏮
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            ▶ 再生
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            ⏭
          </button>
        </div>

        <div>
          <p className="text-gray-600 text-xs uppercase tracking-wide mb-2 font-semibold">プレイリスト</p>
          <div className="space-y-1 max-h-24 overflow-y-auto">
            <div className="bg-blue-50 px-3 py-2 rounded text-sm text-gray-900 truncate border border-blue-200">
              ♪ トラック 1
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded text-sm text-gray-600 truncate border border-gray-200">
              ♪ トラック 2
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded text-sm text-gray-600 truncate border border-gray-200">
              ♪ トラック 3
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded text-sm text-gray-600 truncate border border-gray-200">
              ♪ トラック 4
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">🌤️ 天気</h2>
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            準備中
          </span>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-4 text-center border border-blue-200">
          <div className="text-5xl mb-3">☀️</div>
          <h3 className="text-gray-900 font-bold text-lg mb-1">晴れ</h3>
          <p className="text-gray-600 text-sm">高気圧</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
            <p className="text-gray-600 text-xs mb-1 font-semibold">気温</p>
            <p className="text-gray-900 font-bold text-lg">23°C</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
            <p className="text-gray-600 text-xs mb-1 font-semibold">体感気温</p>
            <p className="text-gray-900 font-bold text-lg">22°C</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded border border-gray-200">
            <span className="text-gray-600 text-sm">湿度</span>
            <span className="text-gray-900 font-semibold">65%</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded border border-gray-200">
            <span className="text-gray-600 text-sm">風速</span>
            <span className="text-gray-900 font-semibold">3.5 m/s</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded border border-gray-200">
            <span className="text-gray-600 text-sm">気圧</span>
            <span className="text-gray-900 font-semibold">1013 hPa</span>
          </div>
        </div>

        <div>
          <p className="text-gray-600 text-xs uppercase tracking-wide mb-2 font-semibold">
            今後の天気
          </p>
          <div className="flex justify-between text-center text-sm">
            <div>
              <p className="text-lg mb-1">☀️</p>
              <p className="text-gray-900 text-xs font-semibold">明日</p>
            </div>
            <div>
              <p className="text-lg mb-1">⛅</p>
              <p className="text-gray-900 text-xs font-semibold">明後日</p>
            </div>
            <div>
              <p className="text-lg mb-1">🌧️</p>
              <p className="text-gray-900 text-xs font-semibold">3日後</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection
