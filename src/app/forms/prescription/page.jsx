'use client'
import { useState } from 'react'
import FormCard from '@/components/FormCard'
import MedicationSelector from '@/components/MedicationSelector'

export default function PrescriptionPage() {
  const [formData, setFormData] = useState({
    patientId: '',
    date: new Date().toISOString().split('T')[0],
    medications: [],
    instructions: '',
    refills: '0'
  })

  const commonMedications = [
    { id: 'med1', name: 'Naltrexone', dosage: '50mg' },
    { id: 'med2', name: 'Buprenorphine', dosage: '8mg' },
    { id: 'med3', name: 'Methadone', dosage: '30mg' },
    { id: 'med4', name: 'Disulfiram', dosage: '250mg' },
    { id: 'med5', name: 'Acamprosate', dosage: '333mg' }
  ]

  const handleAddMedication = (med) => {
    if (!formData.medications.some(m => m.id === med.id)) {
      setFormData(prev => ({
        ...prev,
        medications: [...prev.medications, { ...med, frequency: 'daily', duration: '7' }]
      }))
    }
  }

  const handleRemoveMedication = (id) => {
    setFormData(prev => ({
      ...prev,
      medications: prev.medications.filter(m => m.id !== id)
    }))
  }

  const handleMedicationChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      medications: prev.medications.map(m => 
        m.id === id ? { ...m, [field]: value } : m
      )
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Prescription submitted:', formData)
    // API integration would go here
  }

  return (
    <FormCard 
      title="Medical Prescription" 
      description="Create medication orders for patients"
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
              onChange={(e) => setFormData({...formData, patientId: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prescription Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Add Medication
          </label>
          <MedicationSelector
            options={commonMedications}
            onSelect={handleAddMedication}
          />
        </div>

        {formData.medications.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">
              Current Medications
            </h3>
            {formData.medications.map((med) => (
              <div key={med.id} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{med.name} ({med.dosage})</h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveMedication(med.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Frequency
                    </label>
                    <select
                      value={med.frequency}
                      onChange={(e) => handleMedicationChange(med.id, 'frequency', e.target.value)}
                      className="w-full p-1 text-sm border border-gray-300 rounded"
                    >
                      <option value="daily">Daily</option>
                      <option value="bid">Twice Daily</option>
                      <option value="tid">Thrice Daily</option>
                      <option value="weekly">Weekly</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Duration (days)
                    </label>
                    <input
                      type="number"
                      value={med.duration}
                      onChange={(e) => handleMedicationChange(med.id, 'duration', e.target.value)}
                      className="w-full p-1 text-sm border border-gray-300 rounded"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Refills
                    </label>
                    <select
                      value={formData.refills}
                      onChange={(e) => setFormData({...formData, refills: e.target.value})}
                      className="w-full p-1 text-sm border border-gray-300 rounded"
                    >
                      <option value="0">No Refills</option>
                      <option value="1">1 Refill</option>
                      <option value="2">2 Refills</option>
                      <option value="3">3 Refills</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Instructions
          </label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={(e) => setFormData({...formData, instructions: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={3}
            placeholder="Take with food, avoid alcohol, etc."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generate Prescription
        </button>
      </form>
    </FormCard>
  )
}