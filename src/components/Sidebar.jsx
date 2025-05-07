'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Admissions', href: '/forms/admission', icon: '📝' },
    { name: 'Medical Exams', href: '/forms/medical-exam', icon: '🏥' },
    { name: 'Prescriptions', href: '/forms/prescription', icon: '💊' },
    { name: 'Counseling', href: '/forms/counseling', icon: '🧠' },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h1 className="text-xl font-bold mb-6">Rehab Center</h1>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-lg ${pathname === item.href ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}