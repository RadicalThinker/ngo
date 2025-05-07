'use client'
import { useState } from 'react'
import FormCard from '@/components/FormCard'
import SignaturePad from '@/components/SignaturePad'

export default function DischargePage() {
  const [formData, setFormData] = useState({
    patientId: '',
    dischargeDate: new Date().toISOString().split('T')[0],
    dischargeType: 'completed',
    followUpPlan: 'standard',
    followUpDate: '',
    medications: [],
    patientSignature: '',
    guardianSignature: '',
    doctorNotes: ''
  })

  const dischargeTypes = [
    { value: 'completed', label: 'Treatment Completed' },
    { value: 'transferred', label: 'Transferred to Another Facility' },
    { value: 'self', label: 'Self-Discharge' },
    { value: 'other', label: 'Other Reasons' }
  ]

  const followUpPlans = [
    { value: 'standard', label: 'Standard Follow-up (Monthly)' },
    { value: 'intensive', label: 'Intensive Follow-up (Weekly)' },
    { value: 'none', label: 'No Follow-up Required' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.patientSignature || !formData.guardianSignature) {
      alert('Both patient and guardian signatures are required')
      return
    }
    console.log('Discharge processed:', formData)
    // API integration would go here
  }

  return (
    <FormCard 
      title="Patient Discharge" 
      description="Complete discharge process and documentation"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
              Discharge Date
            </label>
            <input
              type="date"
              name="dischargeDate"
              value={formData.dischargeDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Discharge Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            {dischargeTypes.map(type => (
              <button
                key={type.value}
                type="button"
                onClick={() => setFormData({...formData, dischargeType: type.value})}
                className={`p-2 border rounded-lg text-sm text-center ${
                  formData.dischargeType === type.value
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Follow-up Plan
            </label>
            <select
              name="followUpPlan"
              value={formData.followUpPlan}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              {followUpPlans.map(plan => (
                <option key={plan.value} value={plan.value}>
                  {plan.label}
                </option>
              ))}
            </select>
          </div>

          {formData.followUpPlan !== 'none' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Follow-up Date
              </label>
              <input
                type="date"
                name="followUpDate"
                value={formData.followUpDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required={formData.followUpPlan !== 'none'}
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Doctor's Notes
          </label>
          <textarea
            name="doctorNotes"
            value={formData.doctorNotes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="Summary of treatment, recommendations..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Patient Signature
            </h3>
            <SignaturePad
              onSave={(sig) => setFormData({...formData, patientSignature: sig})}
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Guardian Signature
            </h3>
            <SignaturePad
              onSave={(sig) => setFormData({...formData, guardianSignature: sig})}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Complete Discharge Process
        </button>
      </form>
    </FormCard>
  )
}