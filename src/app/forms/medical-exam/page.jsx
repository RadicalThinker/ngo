'use client'
import { useState } from 'react'
import FormCard from '@/components/FormCard'
import SymptomChecklist from '@/components/SymptomChecklist'

export default function MedicalExamForm() {
  const [formData, setFormData] = useState({
    patientId: '',
    symptoms: {},
    notes: ''
  })

  const symptomsList = [
    'Tremors', 'Jaundice', 'Malnutrition', 
    'Loss of body hair', 'Wasting of muscles', 
    'Injection marks', 'Flushed face'
  ]

  const handleSymptomChange = (symptom, value) => {
    setFormData(prev => ({
      ...prev,
      symptoms: { ...prev.symptoms, [symptom]: value }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted:', formData)
    // API call would go here
  }

  return (
    <FormCard title="Medical Examination" description="Record patient's physical condition">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient ID
          </label>
          <input
            type="text"
            value={formData.patientId}
            onChange={(e) => setFormData({...formData, patientId: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter patient ID"
            required
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Observed Symptoms
          </h3>
          <SymptomChecklist 
            symptoms={symptomsList} 
            onChange={handleSymptomChange} 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={3}
            placeholder="Any additional observations..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Examination
        </button>
      </form>
    </FormCard>
  )
}