import type { FC } from 'react'
import Sidebar from './Sidebar'
import TopSection from './TopSection'
import MiddleSection from './MiddleSection'

const DashboardLayout: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <main className="flex-1 px-8 py-8">
            <div className="space-y-6">
              <TopSection />

              <MiddleSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
