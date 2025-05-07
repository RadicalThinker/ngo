'use client'
import { useState } from 'react'

export default function MedicationSelector({ options, onSelect }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMeds = options.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search medications..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      
      {searchTerm && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredMeds.length > 0 ? (
            filteredMeds.map(med => (
              <div
                key={med.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onSelect(med)
                  setSearchTerm('')
                }}
              >
                {med.name} ({med.dosage})
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No medications found</div>
          )}
        </div>
      )}
    </div>
  )
}