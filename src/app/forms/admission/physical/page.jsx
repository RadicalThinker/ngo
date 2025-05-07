'use client'
import { useState } from 'react'
import FormCard from '@/components/FormCard'
import SignaturePad from '@/components/SignaturePad'

export default function PhysicalConditionForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    relation: 'S/o',
    relativeName: '',
    admissionDate: '',
    admissionTime: '',
    wounds: [''],
    woundDescriptions: [''],
    noAilments: true,
    programManagerSignature: '',
    guardianSignature: '',
    residentSignature: ''
  })

  const relations = ['S/o', 'D/o', 'H/o']

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleWoundChange = (index, field, value) => {
    const updatedWounds = [...formData[field]]
    updatedWounds[index] = value
    setFormData(prev => ({
      ...prev,
      [field]: updatedWounds
    }))
  }

  const addWoundField = () => {
    setFormData(prev => ({
      ...prev,
      wounds: [...prev.wounds, ''],
      woundDescriptions: [...prev.woundDescriptions, '']
    }))
  }

  const removeWoundField = (index) => {
    const updatedWounds = formData.wounds.filter((_, i) => i !== index)
    const updatedDescriptions = formData.woundDescriptions.filter((_, i) => i !== index)
    setFormData(prev => ({
      ...prev,
      wounds: updatedWounds,
      woundDescriptions: updatedDescriptions
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // API integration would go here
  }

  return (
    <FormCard 
      title="Physical Condition at Admission" 
      description="Document patient's physical state upon arrival"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Relation
              </label>
              <select
                name="relation"
                value={formData.relation}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                {relations.map(rel => (
                  <option key={rel} value={rel}>{rel}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Relative Name
              </label>
              <input
                type="text"
                name="relativeName"
                value={formData.relativeName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admission Date
            </label>
            <input
              type="date"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admission Time
            </label>
            <input
              type="time"
              name="admissionTime"
              value={formData.admissionTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Observed Wounds/Injuries
          </h3>
          
          {formData.wounds.map((wound, index) => (
            <div key={index} className="space-y-2 p-3 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Wound/Injury {index + 1}</h4>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeWoundField(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
              
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  value={wound}
                  onChange={(e) => handleWoundChange(index, 'wounds', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Location and description of wound"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Patient's Statement on Cause
                </label>
                <input
                  type="text"
                  value={formData.woundDescriptions[index]}
                  onChange={(e) => handleWoundChange(index, 'woundDescriptions', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="How the injury occurred"
                />
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addWoundField}
            className="text-blue-600 text-sm flex items-center"
          >
            <span className="mr-1">+</span> Add Another Wound/Injury
          </button>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="noAilments"
            checked={formData.noAilments}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 text-sm text-gray-700">
            The patient is not suffering from any ailments as per family information
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Program Manager Signature
            </h3>
            <SignaturePad
              onSave={(sig) => setFormData({...formData, programManagerSignature: sig})}
            />
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Parent/Guardian Signature
            </h3>
            <SignaturePad
              onSave={(sig) => setFormData({...formData, guardianSignature: sig})}
            />
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Resident Signature
            </h3>
            <SignaturePad
              onSave={(sig) => setFormData({...formData, residentSignature: sig})}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-6"
        >
          Submit Physical Condition Report
        </button>
      </form>
    </FormCard>
  )
}