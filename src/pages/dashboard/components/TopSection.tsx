import type { FC } from 'react'

const TopSection: FC = () => {
  const generateContributionData = () => {
    const weeks = Math.ceil(365 / 7)
    const data = []
    for (let i = 0; i < weeks; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        week.push(Math.floor(Math.random() * 5))
      }
      data.push(week)
    }
    return data
  }

  const contributionData = generateContributionData()

  const languages = [
    { name: 'JavaScript', percentage: 35, color: 'bg-yellow-400' },
    { name: 'TypeScript', percentage: 25, color: 'bg-blue-500' },
    { name: 'Python', percentage: 20, color: 'bg-green-500' },
    { name: 'CSS', percentage: 15, color: 'bg-pink-500' },
    { name: 'Other', percentage: 5, color: 'bg-gray-400' },
  ]

  return (
    <div className="grid grid-cols-10 gap-6">
      <div className="col-span-10 lg:col-span-7 bg-white rounded-lg p-6 shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">GitHub</h2>
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            準備中
          </span>
        </div>

        <div className="flex gap-6">
          <div className="w-80 border-r border-gray-200 pr-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">John Doe</h3>
              <p className="text-gray-600 text-xs">@johndoe</p>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-blue-50 rounded-lg p-2 text-center border border-blue-200">
                <p className="text-gray-900 font-bold text-sm">128</p>
                <p className="text-gray-600 text-xs">Followers</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 text-center border border-blue-200">
                <p className="text-gray-900 font-bold text-sm">45</p>
                <p className="text-gray-600 text-xs">Repos</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 text-center border border-blue-200">
                <p className="text-gray-900 font-bold text-sm">256</p>
                <p className="text-gray-600 text-xs">Following</p>
              </div>
            </div>

          </div>

          <div className="flex-1">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-900 mb-3">Contributions (Last 365 days)</p>
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-0.5 w-max">
                  {contributionData.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-0.5">
                      {week.map((intensity, dayIdx) => {
                        const colors = [
                          'bg-gray-100',
                          'bg-green-100',
                          'bg-green-300',
                          'bg-green-500',
                          'bg-green-700'
                        ]
                        return (
                          <div
                            key={`${weekIdx}-${dayIdx}`}
                            className={`w-2.5 h-2.5 rounded-sm ${colors[intensity]} border border-gray-200`}
                            title={`${intensity * 5} contributions`}
                          />
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">Top Languages</p>
              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-gray-700">{lang.name}</span>
                      <span className="text-xs text-gray-600">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${lang.color}`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-10 lg:col-span-3 bg-white rounded-lg p-6 shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">⏱️ ポモドーロ</h2>
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            準備中
          </span>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-4 text-center border border-gray-200">
          <div className="text-4xl font-bold text-gray-900 mb-1 font-mono">
            25:00
          </div>
          <p className="text-gray-600 text-sm">作業中</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
            <p className="text-blue-700 text-xs mb-1 font-semibold">作業</p>
            <p className="text-gray-900 font-bold">25分</p>
          </div>
          <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
            <p className="text-green-700 text-xs mb-1 font-semibold">休憩</p>
            <p className="text-gray-900 font-bold">5分</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
            ▶
          </button>
          <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 rounded-lg transition-colors text-sm">
            ⏸
          </button>
          <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 rounded-lg transition-colors text-sm">
            🔄
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopSection
