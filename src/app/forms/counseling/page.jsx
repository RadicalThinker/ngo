'use client'
import { useState } from 'react'
import FormCard from '@/components/FormCard'
import SessionTypeSelector from '@/components/SessionTypeSelector'

export default function CounselingPage() {
  const [formData, setFormData] = useState({
    patientId: '',
    sessionType: 'individual',
    date: new Date().toISOString().split('T')[0],
    duration: '60',
    notes: '',
    progress: '3',
    followUpRequired: false
  })

  const sessionTypes = [
    { value: 'individual', label: 'Individual Therapy' },
    { value: 'group', label: 'Group Therapy' },
    { value: 'family', label: 'Family Counseling' },
    { value: 'assessment', label: 'Initial Assessment' }
  ]

  const progressLevels = [
    { value: '1', label: 'No Progress' },
    { value: '2', label: 'Minimal Progress' },
    { value: '3', label: 'Moderate Progress' },
    { value: '4', label: 'Significant Progress' },
    { value: '5', label: 'Excellent Progress' }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Session recorded:', formData)
    // API integration would go here
  }

  return (
    <FormCard 
      title="Counseling Session" 
      description="Record therapy session details"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient ID
            </label>
            <input
              type="text"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Session Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Session Type
          </label>
          <SessionTypeSelector
            options={sessionTypes}
            value={formData.sessionType}
            onChange={(value) => setFormData({...formData, sessionType: value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (minutes)
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              <option value="90">90</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Progress Level
            </label>
            <select
              name="progress"
              value={formData.progress}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              {progressLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Session Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={5}
            placeholder="Detailed notes about the session..."
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="followUpRequired"
            checked={formData.followUpRequired}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 text-sm text-gray-700">
            Follow-up session required
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Session Record
        </button>
      </form>
    </FormCard>
  )
}