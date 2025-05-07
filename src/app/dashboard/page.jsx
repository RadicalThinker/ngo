'use client'
import DashboardCard from '@/components/DashboardCard'
import { FiUsers, FiFileText, FiActivity, FiCalendar } from 'react-icons/fi'

export default function Dashboard() {
  const stats = [
    { title: 'Active Patients', value: '24', icon: <FiUsers className="text-blue-500" />, change: '+3 this week' },
    { title: 'Completed Forms', value: '142', icon: <FiFileText className="text-green-500" />, change: '12 today' },
    { title: 'Counseling Sessions', value: '18', icon: <FiActivity className="text-purple-500" />, change: '3 scheduled' },
    { title: 'Upcoming Appointments', value: '7', icon: <FiCalendar className="text-orange-500" />, change: '2 tomorrow' },
  ]

  const recentPatients = [
    { id: 'P1001', name: 'John Doe', status: 'Admission', lastVisit: '2 hours ago' },
    { id: 'P1002', name: 'Jane Smith', status: 'Treatment', lastVisit: '1 day ago' },
    { id: 'P1003', name: 'Robert Johnson', status: 'Counseling', lastVisit: '2 days ago' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Recent Patients</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      patient.status === 'Admission' ? 'bg-blue-100 text-blue-800' :
                      patient.status === 'Treatment' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.lastVisit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}