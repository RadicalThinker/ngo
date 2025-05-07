export default function DashboardCard({ title, value, icon, change }) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
            <p className="mt-1 text-xs text-gray-500">{change}</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50">
            {icon}
          </div>
        </div>
      </div>
    )
  }